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
    <div class="nav">
      <wv-tabs swipeable>
        <wv-tab v-for="(v,k) in titlebar" :key="k" :title="v.title">内容</wv-tab>
      </wv-tabs>
    </div>
    <div class="content">
      <ul>
        
        <li  v-for="(v,k) in blog" :key="k">
          <!-- <router-link :to="{path:'details',params:{id:v.id} }" class="cent_abstract" > -->
          <router-link :to="'/details/'+v.id" class="cent_abstract" >
            <div class="cent_img">
              <img :src="v.article_img" alt>
            </div>
            <div class="briefly">
              <a href="#">{{v.content}}</a>
            </div>
          </router-link>
            <div class="operation">
              <div class="comment">
                <img v-if="dianzhan" src="../../assets/images/index_like.png" @click="switchbgi(k)" alt>
                <img  v-else src="../../assets/images/like.png" @click="switchbgi(k)" alt>
                <span>{{v.goods_number}}</span>
              </div>
              <div class="thumbs-up" >
                <img  src="../../assets/images/comment29.png" >
                <span >{{v.comment_number}}</span>
              </div>
              <div class="share">
                <img src="../../assets/images/fenxiang.png">
                <span >23</span>
              </div>
            </div>
            <div class="line"></div>
            <div class="user">
              <img src="../../assets/images/lunbo_04.jpg" alt>
              <span>夏目南生</span>
              <!-- <span class="time">{{v.created_at}}</span> -->
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
export default {
  data(){
    return{
      titlebar:[
        {
          title:'最新',
        },
        {
          title:'热门',
        },
        {
          title:'排行',
        }
      ],
      blog:[],
      agree:
        {
          upuser_id:3,
          article_id:1,
          isgoodup:0,//是否点赞
        },
      dianzhan:false,
      goodnum:0,//点击数量
    }
  },
  computed:{

  },
  created:function(){
    this.axios.get('/showblog')
    .then(res=>{
      console.log(res.data.data);
      this.blog = res.data.data;
    })
  },
  methods:{
      switchbgi(key){
        

        // this.goodup.upuser_id = localStorage.getItem('USER_ID')
        // this.goodup.article_id = key +1
        // this.dianzhan  = !this.dianzhan
        // console.log(this.goodup);

        // this.axios.post('/addagree/'.key+1,)
        // .then(res=>{
        //     console.log(res.data)
        // })
        // .catch(error=>{
        //   console.log(error)
        // })

        // console.log(localStorage.getItem('USER_ID'))
        // console.log(this.blog[key].goodups[0].isgoodup)
        // if(this.blog[key].goodups.isgoodup){
        //   alert(1)
        // }else{
        //   alert(2)
        // }
        // this.isdianzan = !this.isdianzan;
        // 1.判断是否点赞
          // 点过赞时
        // if(this.goodup.isgoodup){
        //     this.goodup.isgoodup = !this.goodup.isgoodup;
        //     this.blog[key].goods_number--
        //     alert('取消点赞'+this.blog[key].goods_number)
        //     localStorage.setItem('goodstate',this.goodup.goodstate==false)
        // }else{
        //   // 没点赞时设置点赞状态为true
        //   this.goodup.isgoodup = !this.goodup.isgoodup;
        //   this.blog[key].goods_number++
        //   alert('点赞'+this.blog[key].goods_number)
        //   localStorage.setItem('goodstate',this.goodup.goodstate==true)
        // }
        // 2.如果没有点赞则把数量加一，如果二次点赞怎为取消点赞，并保存点赞状态
        // 3.保存点赞的状态到浏览器

        // if(this.goodup.isgoodup){
        //   alert(1);
        //   this.blog[key].goods_number = this.blog[key].goods_number + 1
        // }else{
        //    this.blog[key].goods_number = this.blog[key].goods_number - 1
        // }
        // alert(key+1)
        // this.goodup.isgoodup = !this.goodup.isgoodup;
        // console.log(this.blog[key].goods_number);
        // this.blog[k] = res.data.goods_number
        // this.axios.post('/showblog')
        // .then(res=>{
        //   console.log(res.data.data);
        //   this.blog = res.data.data; 
        // })
      }
  },
  
}
</script>
