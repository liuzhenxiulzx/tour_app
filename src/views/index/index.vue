<template>
  <div>
    <header>
      <div class="indexnav">
        <div class="mydata">
          <img v-if="userdata.header" :src="userdata.header">
          <img v-else src="../../assets/images/header.jpg" alt>
        </div>
      <a class="myname">{{userdata.username}}</a>
      <router-link to="/login" class="return" v-if="id">
         <a class="btnlogin" @click="outlogin">退出登录</a>
      </router-link>
      <router-link to="/login" class="return" v-else>
         <a class="btnlogin">请登录</a>
      </router-link>
      </div>
    </header>

    <div class="content">
      <ul>
        <li v-for="(v,k) in blog" :key="k">
          <router-link :to="'/details/'+v.id" class="cent_abstract">
            <div class="cent_img">
              <img id="centartimg" v-if="v.article_img.indexOf(';') > -1" :src="v.article_img.substring('0',v.article_img.indexOf(';'))" height="189px" width="189px" alt>
              <img id="centartimgtwo" v-if="v.article_img.indexOf(';') == -1" :src="v.article_img" height="189px" width="189px" alt>
            </div>
            <div class="briefly">
              <a href="#">{{v.content}}</a>
            </div>
          </router-link>
          <div class="line"></div>
          <div class="user">
            <img :src="v.blogauthor.header" alt>
            <div id="username">{{v.blogauthor.username}}</div>
            <div id="datatime">{{v.created_at.substring(0,10)}}</div>
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
      userdata: '',
      id: localStorage.getItem("USER_ID"),
      allgoods:[], 
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
    // 获取个人信息
    this.axios.get('/personalName/'+this.id).then(res=>{
      this.userdata = res.data.data;
    })
  },
  methods: {
    outlogin(){
      localStorage.removeItem("USER_ID");
      localStorage.removeItem("ACCESS_TOKEN");
    },
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
  }
};
</script>
