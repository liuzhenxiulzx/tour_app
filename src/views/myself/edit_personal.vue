<template>
  <div>
    <header>
      <router-link to="/myself" class="return">
        <img src="../../assets/images/return.png" alt>
      </router-link>
      <span>基本信息</span>
    </header>
    <div class="edit_list">
      <ul>
        <li>
          <div class="info-row">
            <span class="info-row-title">头像</span>
            <span class="avator-sm">
              <img src="img/avatar.jpg" alt>
            </span>
          </div>
        </li>
        <li>
          <div class="info-row">
            <span class="info-row-title">昵称</span>
            <span class="info-row-text">tom</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/css/myself.css";
</style>
