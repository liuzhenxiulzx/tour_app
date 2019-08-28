<template>
  <div>
    <header>
      <router-link to="/myself" class="return">
        <img src="../../assets/images/return.png" alt>
      </router-link>
      <span>基本信息</span>
    </header>
    <div class="edit_list">
      <div class="set_head">
        <span class="avator-sm">
          <img :src="myselfnews.header" alt>
        </span>
        <el-upload
          class="upload-demo"
          :action="domain"
          :auto-upload="true"
          :on-remove="moveimg"
          accept="image/jpeg,image/gif,image/png"
          :before-upload="beforeUpload"
          :limit="1"
          :on-exceed="handleExceed"
          :http-request="upqiniu">
          <el-button size="small" type="primary" class="button">更换头像</el-button>
        </el-upload>
      </div>
      <ul>
        <li>
          <div class="info-row">
            <span class="info-row-title">昵称</span>
            <el-input
              placeholder="请输入昵称"
              v-model="myselfnews.username"
              clearable>
            </el-input>
          </div>
        </li>
       <li>
          <div class="info-row">
            <span class="info-row-title">手机号</span>
            <el-input
              placeholder="请输入手机号"
              v-model="myselfnews.phone"
              @blur.prevent="isphone"
              clearable>
            </el-input>
          </div>
        </li>
        <li>
          <div class="info-row">
            <span class="info-row-title">原密码</span>
            <el-input 
               placeholder="请输入原密码" 
               v-model="myselfnews.oldpassword"
               show-password>
            </el-input>
          </div>
        </li>
        <li>
          <div class="info-row">
            <span class="info-row-title">新密码</span>
            <el-input 
               placeholder="请输入新密码" 
               v-model="myselfnews.password"
               show-password>
            </el-input>
          </div>
        </li>
      </ul>
      <div class="savebtn" @click="save">保存</div>

    </div>
  </div>
</template>

<style scoped>
@import "../../assets/css/myself.css";
</style>

<script>
import { Toast, Dialog } from "we-vue";
  export default {
    data(){
      return {
        domain: "http://upload.qiniup.com",
        qiniuaddr: "qiniuyun.liuzhenxiu.cn", // 七牛云的图片外链地址
        dataNews: "",
        key:'',
        id: localStorage.getItem("USER_ID"),
        myselfnews: {
          username: '',
          oldpassword:'',
          header:'',
          password:'',
          phone:'',
          id: localStorage.getItem("USER_ID"),
        }
      }
    },
    methods: {
      moveimg(file,fileList){
        // 删除选定的图片
          const suffx = fileList.length -1;
          this.blog.article_img.splice(suffx,1)
      },
      handleExceed(file,fileList){
        this.$message.error('最多只能上传一张图片!');
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
          this.myselfnews.header = 'http://' + this.qiniuaddr + '/' + res.data.key;
          this.key = res.data.key
        }).catch(error=>{
          console.log(error)
        })
      })

    },
      // 验证文件合法性
      beforeUpload (file) {
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
      save(){
          if(this.myselfnews.phone){
            var reg = /(?:^1[3456789]|^9[28])\d{9}$/
            var strPhone = reg.test(this.myselfnews.phone);
            if(!strPhone){
              Toast.fail({
                duration: 1000,
                message: "手机号格式不正确"
              });
            }
          } else {
              Toast.fail({
                duration: 1000,
                message: "手机号不能为空"
              });
          }

          if(!this.myselfnews.username){
            Toast.fail({
              duration: 1000,
              message: "昵称不能为空"
            });
          }

          if(this.myselfnews.username && this.myselfnews.phone){
            if(this.myselfnews.password){
              this.axios.post('/Personalnews', this.myselfnews).then(res=>{
                if (res.data.status_code == 404) {
                    Toast.fail({
                      duration: 1000,
                      message: "原密码和输入的密码不一致！"
                    });
                } else if(res.data.status_code == 422) {
                    Toast.fail({
                      duration: 1000,
                      message: "昵称过长"
                    });
                } else if(res.data.status_code == 200) { 
                    Toast.success('修改成功');
                    this.$router.push('/login');
                }
              })
            } else {
              this.axios.post('/Personalnews', this.myselfnews).then(res=>{
                if (res.data.status_code == 404) {
                    Toast.fail({
                      duration: 1000,
                      message: "原密码和输入的密码不一致！"
                    });
                } else if(res.data.status_code == 422) {
                    Toast.fail({
                      duration: 1000,
                      message: "昵称长度至少为三个字符"
                    });
                } else if(res.data.status_code == 200) { 
                    Toast.success('修改成功');
                    this.$router.push('/myself');
                }
              })
            }
          }

      }
    },
    created:function(){
        this.axios.get('/personalName/'+this.id).then(res=>{
          this.dataNews = res.data.data;
          this.myselfnews.username = res.data.data.username;
          this.myselfnews.header = res.data.data.header;
          this.myselfnews.phone = res.data.data.phone;
        })
      }
  };
</script>