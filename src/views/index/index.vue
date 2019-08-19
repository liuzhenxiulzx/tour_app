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
              <img v-if="v.article_img.search(';')" :src="v.article_img.substring('0',v.article_img.indexOf(';'))" alt>
              <img  :src="v.article_img" alt>
            </div>
            <div class="briefly">
              <a href="#">{{v.content}}</a>
            </div>
          </router-link>
          <!-- <div class="operation">
            <div class="comment">
              <img  v-if="v.goodup" src="../../assets/images/like.png" @click="switchbgi(v.id,k,v)" alt> 
              <img  v-else src="../../assets/images/index_like.png" @click="switchbgi(v.id,k,v)" alt>
              <span>{{v.goods_number}}</span>
            </div>
            <div class="thumbs-up">
              <img src="../../assets/images/comment29.png">
              <span>{{v.comment_number}}</span>
            </div>
            <div class="share">
              <img src="../../assets/images/collectionicon.png" @click="forward(v.id,k)">
              <span>{{v.collect_number}}</span>
            </div>
          </div> -->
          <div class="line"></div>
          <div class="user">
            <img :src="v.blogauthor.header" alt>
            <span>{{v.blogauthor.username}}</span>
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
  inject:['reload'],
   data() {
    return {
      blog: [],
      // agree: {
      //   upuser_id: localStorage.getItem("USER_ID"),
      //   article_id: "",
      //   isgoodup: "" //是否点赞
      // },
      allgoods:[], //该用户所有点赞信息
      // collect:{ //收藏信息
      //   user_id: localStorage.getItem("USER_ID"),
      //   article_id: "",
      // },
      uid:localStorage.getItem("USER_ID"),
      addnumber:{ //增加收藏数量
        id:"",
        collect_number:"",
      }
    };
  },
  computed: {},
  created: function() {
    // 获取所有文章信息
    this.axios.get("/showblog/"+this.uid).then(res => {
      this.blog = res.data.data;
    });
    // 获取该用户点赞信息
    this.axios.get("/condition/"+this.uid).then(res=>{
      this.allgoods = res.data.data;
    })
  },
  methods: {
    // 文章收藏
    forward(key,k){
       this.collect.article_id = key;
      //  获取收藏文章id
       this.addnumber.id = key;
      //  获取收藏数量
       this.addnumber.collect_number = this.blog[k].collect_number +1;
        Dialog.confirm({
          title: '',
          message: '确定要收藏吗',
          showCancelButton: true
        }).then(() => {
               
              // 添加收藏记录
              this.axios.post('/collection',this.collect)
              .then(res=>{
               
                  if(res.data.status_code==200){
                   // 增加收藏数量
                    this.axios.post('/addcollenumber',this.addnumber).then(res=>{})
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
              
              setTimeout(()=>{
                 this.reload();
              },1000)

        }).catch(() => {

        })
    },
    // switchbgi(key, item,v) {
    //   // console.log(v.goodup.isgoodup)
    //    this.agree.article_id = key;
    // //   // 判断是否点赞
    //   if(this.blog[item].goodup){
         
    //       if (this.blog[item].goodup.isgoodup == 0) 

    //       {
    //         this.agree.isgoodup = "1";//状态改为1，表示已经点击
          
    //         this.blog[item].goods_number = this.blog[item].goods_number + 1;
    //         // console.log(0)
    //       } 
          
    //       if (this.blog[item].goodup.isgoodup == 1)      
    //       {
    //         this.agree.isgoodup = "0";
    //         // 不为负数
    //         if(this.blog[item].goods_number > 0)
    //         {
    //           this.blog[item].goods_number = this.blog[item].goods_number - 1;
    //         }
    //         else if(this.blog[item].goods_number = 0)
    //         {
    //             this.blog[item].goods_number = this.blog[item].goods_number + 1;
    //         }
    //       }  

    //     }
    //     else
    //     {
    //       // 如没有点赞
    //       this.agree.isgoodup = '1';
    //       this.blog[item].goods_number = this.blog[item].goods_number + 1;
    //     }
    
    //     //3.修改点赞对应的文章的点赞状态
    //     this.axios.post("/supports", this.agree).then(res => {
    //       this.agree.isgoodup = res.data.data.isgoodup;
    //     });

    //     // 4.修改表中点赞数量
    //     this.axios.post("/addagree", {
    //       id:key,
    //       goods_number: this.blog[item].goods_number
    //     })

    //     setTimeout(()=>{
    //               this.reload();
    //     },1000)
    // },

   

  }
};
</script>
