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
          <img src="../../assets/images/head.jpg" alt>
        </span>
        <button class="button">更换头像</button>
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
        dataNews: "",
        id: localStorage.getItem("USER_ID"),
        myselfnews: {
          username:'',
          oldpassword:'',
          password:'',
          phone:'',
          id: localStorage.getItem("USER_ID"),
        }
      }
    },
    methods: {
      isphone(){
        var reg = /(?:^1[3456789]|^9[28])\d{9}$/
        var strPhone = reg.test(this.myselfnews.phone);
        if(!strPhone){
          Toast.fail({
            duration: 1000,
            message: "手机号格式不正确"
          });
        }
      },
      save(){
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
    },
    created:function(){
        this.axios.get('/personalName/'+this.id).then(res=>{
          this.dataNews = res.data.data;
        })
      }
  };
</script>