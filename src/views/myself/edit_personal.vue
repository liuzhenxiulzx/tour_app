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
              v-model="inputname"
              clearable>
            </el-input>
          </div>
        </li>
        <li>
          <div class="info-row">
            <span class="info-row-title">年龄</span>
            <div>
              <el-date-picker
                v-model="valueege"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </div>
        </li>
        <li>
          <div class="info-row">
            <span class="info-row-title">邮箱</span>
            <el-input
              placeholder="请输入邮箱"
              v-model="inputemail"
              clearable>
            </el-input>
          </div>
        </li>
        <li>
          <div class="info-row">
            <span class="info-row-title">手机号</span>
            <el-input
              placeholder="请输入手机号"
              v-model="inputiPhone"
              clearable>
            </el-input>
          </div>
        </li>
        <li>
          <div class="info-row">
            <span class="info-row-title">性别</span>
            <div>
              <template>
                <el-radio v-model="radio" label="1">男</el-radio>
                <el-radio v-model="radio" label="2">女</el-radio>
              </template>
            </div>
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
  export default {
    data(){
      return {
        inputname:'',
        inputemail:'',
        valueege:'',
        radio:'1',
        inputiPhone:'',
      }
    },
    methods: {
      save(){
        
      }
    }
  };
</script>