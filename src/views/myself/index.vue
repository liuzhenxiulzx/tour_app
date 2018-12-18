<template>
  <div>
    <header>
      <div class="photo">
        <!-- 照片墙 -->
        <div class="photo_wall">
          <img src="../../assets/images/photo_wall.jpg" alt>
        </div>
        <!-- 头像 -->
        <img id="headimg" src="../../assets/images/head.jpg" alt>
        <!-- 用户名 -->
        <span>夏目南生</span>
        <div class="edit">
          <router-link to="/edit_personal">编辑个人资料</router-link>
        </div>
      </div>
    </header>
      <div class="follow">
        <ul>
          <li>
            <router-link to="/followme">关注我的人</router-link>
            <span>23</span>
          </li>
          <li>
            <router-link to="/myfollow">我关注的人</router-link>
            <span>34</span>
          </li>
        </ul>
      </div>
    <!-- 个人列表 -->
    <div class="list">
      <wv-group>
        <wv-cell title="我的作品" is-link to="/">
         <!-- <img :src="imgIcon" alt slot="icon" class="cell-icon"> -->
          <img alt slot="icon" class="cell-icon">
        </wv-cell>
        <wv-cell title="最近浏览" is-link to="/">
          <img alt slot="icon" class="cell-icon">
        </wv-cell>
        <wv-cell title="帮助" is-link to="/">
          <img alt slot="icon" class="cell-icon">
        </wv-cell>
        <wv-cell title="设置" is-link to="/">
          <img alt slot="icon" class="cell-icon">
        </wv-cell>
      </wv-group>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/css/myself.css";
</style>
