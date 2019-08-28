<template>
  <div>
    <header>
      <div class="photo">
        <!-- 照片墙 -->
        <div class="photo_wall">
          <img v-if="dataNews.backgroundimg" :src="dataNews.backgroundimg" alt>
          <img v-else src="../../assets/images/backgroundimg.jpg" alt>
          <el-upload
            class="upload-demo"
            :action="domain"
            :auto-upload="true"
            accept="image/jpeg,image/gif,image/png"
            :on-remove="moveimg"
            :before-upload="beforeUpload"
            :limit="1"
            :http-request="upqiniu">
            <el-button id="backgroundimg">更换背景</el-button>
          </el-upload>
        </div>
        <!-- 头像 -->
        <img v-if="dataNews.header" id="headimg" :src="dataNews.header" alt>
        <img v-else id="headimg" src="../../assets/images/header.jpg" alt>
        <!-- 用户名 -->
        <span class="username">{{dataNews.username}}</span>
        <div class="edit" v-if="dataNews.header">
          <router-link to="/edit_personal">编辑个人资料</router-link>
        </div>
        <div class="edit" v-else @click="editnews">
          <router-link to="">编辑个人资料</router-link>
        </div>
      </div>
    </header>
      <div class="follow">
        <ul>
          <li>
            <router-link to="/followme">关注我的人</router-link>
            <span>{{dataNews.followme}}</span>
          </li>
          <li>
            <router-link to="/myfollow">我关注的人</router-link>
            <span>{{dataNews.mefoolow}}</span>
          </li>
        </ul>
      </div>
    <!-- 个人列表 -->
    <div class="list">
      <wv-group>
        <wv-cell title="我的作品" is-link to='/myarticle'>
          <img alt slot="icon" class="cell-icon">
        </wv-cell>
        <wv-cell title="最近浏览" is-link>
          <img alt slot="icon" class="cell-icon">
        </wv-cell>
        <wv-cell title="帮助" is-link>
          <img alt slot="icon" class="cell-icon">
        </wv-cell>
        <wv-cell title="设置" is-link>
          <img alt slot="icon" class="cell-icon">
        </wv-cell>
      </wv-group>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/css/myself.css";
</style>

<script>
import { Toast, Dialog } from "we-vue";
export default {
  inject:['reload'],
  data(){
    return {
      id: localStorage.getItem("USER_ID"),
      dataNews: "",
      key:'',
      domain: "http://upload.qiniup.com",
      qiniuaddr: "qiniuyun.liuzhenxiu.cn", // 七牛云的图片外链地址
      savebagkimg: {
        id: localStorage.getItem("USER_ID"),
        backgroundimg: '',
      }
    }
  },
  methods: {
    editnews(){
      if(!localStorage.getItem("USER_ID")){
        console.log(localStorage.getItem("USER_ID"))
          Toast.fail({
            duration: 1000,
            message: "请登录后修改"
          });
      }
    },
    // 上传图片到七牛云
    upqiniu (req) {
      const config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }
      let filetype = ''
      if (req.file.type === 'image/png') {
        filetype = 'png'
      } else {
        filetype = 'jpg'
      }
      // 重命名要上传的文件
      const keyname = 'tour' + new Date() + Math.floor(Math.random() * 100) + '.' + filetype
      // 从后端获取上传凭证token
      this.axios.get('/token').then(res => {
        const formdata = new FormData()
        formdata.append('file', req.file)
        formdata.append('token', res.data.data)
        formdata.append('key', keyname)
        // 获取到凭证之后再将文件上传到七牛云空间
        this.axios.post(this.domain, formdata,config).then(res => {
            this.dataNews.backgroundimg = 'http://' + this.qiniuaddr + '/' + res.data.key;
            this.savebagkimg.backgroundimg = 'http://' + this.qiniuaddr + '/' + res.data.key;
            this.axios.post("/backgroundimg", this.savebagkimg).then(res=> {
              setTimeout(()=>{
                 this.reload();
              },1000)
            })
          this.key = res.data.key          
        }).catch(error=>{
          console.log(error)
        })
      })

    },
    // 验证文件合法性
    beforeUpload (file) {
      // console.log(file)
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/bmp'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('不支持的图片格式')
      }
      if (!isLt2M) {
        this.$message.error('图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    moveimg(file,fileList){
      // 删除选定的图片
        const suffx = fileList.length -1;
        this.blog.article_img.splice(suffx,1)
    }
  },
  created:function(){
    this.axios.get('/personalName/'+this.id).then(res=>{
      this.dataNews = res.data.data;
    })
  }
}
</script>

