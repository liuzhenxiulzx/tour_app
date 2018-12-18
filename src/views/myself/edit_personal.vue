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
            <input type="text" class="info-row-text">
          </div>
        </li>
        <li>
          <div class="info-row">
            <span class="info-row-title">昵称</span>
            <input type="text" class="info-row-text">
          </div>
        </li>
        <li>
          <div class="info-row">
            <span class="info-row-title">年龄</span>
            <!-- <input type="text" class="info-row-text"> -->
            <wv-datetime-picker
              v-model="pickerVisible"
              type="date"
              year-format="{value} 年"
              month-format="{value} 月"
              date-format="{value} 日">
            </wv-datetime-picker>
          </div>
        </li>
        <li>
          <div class="info-row">
            <span class="info-row-title">邮箱</span>
            <input type="text" class="info-row-text">
          </div>
        </li>
        <li>
          <div class="info-row">
            <span class="info-row-title">手机号</span>
            <input type="text" class="info-row-text">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/css/myself.css";
</style>

<script>
  export default {
    methods: {
      openPicker() {
        this.$refs.picker.open();
      }
    }
  };
</script>