<template>
  <div>
    <header>
      <wv-swipe :height="150" :autoplay="3000">
        <wv-swipe-item>
          <img src="../../assets/images/lunbo_01.jpg">
        </wv-swipe-item>
        <wv-swipe-item>
          <img src="../../assets/images/lunbo_02.jpg">
        </wv-swipe-item>
        <wv-swipe-item>
          <img src="../../assets/images/lunbo_03.jpg">
        </wv-swipe-item>
        <wv-swipe-item>
          <img src="../../assets/images/lunbo_04.jpg">
        </wv-swipe-item>
      </wv-swipe>
    </header>

    <div class="content">
      <ul>
        <li v-for="(v,k) in blog" :key="k">
          <router-link :to="'/details/'+v.id" class="cent_abstract">
            <div class="cent_img">
              <img :src="v.article_img" alt>
            </div>
            <div class="briefly">
              <a href="#">{{v.content}}</a>
            </div>
          </router-link>
          <div class="operation">
            <div class="comment">
              <img v-if="agree.isgoodup==0" src="../../assets/images/index_like.png" @click="switchbgi(v.id,k)" alt>
              <img v-else src="../../assets/images/like.png" @click="switchbgi(v.id,k)" alt>
              <span>{{v.goods_number}}</span>
            </div>
            <div class="thumbs-up">
              <img src="../../assets/images/comment29.png">
              <span>{{v.comment_number}}</span>
            </div>
            <div class="share">
              <img src="../../assets/images/collectionicon.png" @click="forward(v.id)">
              <span>23</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="user">
            <img src="../../assets/images/lunbo_04.jpg" alt>
            <span>夏目南生</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="interval"></div>
  </div>
</template>


<style scoped>
@import "../../assets/css/index.css";
</style>

<script>
import { Toast } from "we-vue";
import { Dialog } from "we-vue";
export default {
  data() {
    return {
      blog: [],
      agree: {
        upuser_id: localStorage.getItem("USER_ID"),
        article_id: "",
        isgoodup: "0" //是否点赞
      },
      collect:{
        user_id: localStorage.getItem("USER_ID"),
        article_id: "",
      }
    };
  },
  computed: {},
  created: function() {
    this.axios.get("/showblog").then(res => {
      this.blog = res.data.data;
    });
    // console.log(this.blog)
  },
  methods: {
    // 文章转发
    forward(key){
       this.collect.article_id = key;
        Dialog.confirm({
          title: '',
          message: '确定要收藏吗',
          showCancelButton: true
        }).then(() => {
             
              this.axios.post('/collection',this.collect)
              .then(res=>{
                  if(res.data.status_code==200){
                    Toast.text({
                      duration: 1000,
                      message: '收藏成功'
                    })
                  }
                  else if(res.data.status_code==422)
                  {
                     Toast.text({
                      duration: 1000,
                      message: '收藏失败'
                    })
                  }
                  else if(res.data.status_code==400)
                  {
                     Toast.text({
                      duration: 1000,
                      message: '该文章已收藏'
                    })
                  }
              })
        }).catch(() => {

        })
    },
    switchbgi(key, item) {
      this.agree.article_id = key;
      // 1.点击时判断是否登录
      if (localStorage.getItem("USER_ID")) {
        this.agree.upuser_id = localStorage.getItem("USER_ID");
      } else {
        Dialog.confirm({
          title: "",
          message: "您还未登录哦,是否要登录",
          showCancelButton: true
        })
          .then(() => {
            this.$router.push("/login");
          })
          .catch(() => {});
      }

      //2.点击时修改状态
      if (this.agree.isgoodup == 0) {
        this.agree.isgoodup = "1";
        this.blog[item].goods_number = this.blog[item].goods_number + 1;
      } else {
        this.agree.isgoodup = "0";
        this.blog[item].goods_number = this.blog[item].goods_number - 1;
      }
      //3.修改点赞对应的文章的点赞状态
      this.axios.post("/supports", this.agree).then(res => {
        this.agree.isgoodup = res.data.data.isgoodup;
        // console.log(res.data.data);
      });

      // 4.修改表中点赞数量
      this.axios
        .post("/addagree/" + key, {
          goods_number: this.blog[item].goods_number
        })
        .then(res => {
          // console.log(res.data)
        });
    }
  }
};
</script>
