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
            <span>23</span>
            <a href>关注我的人</a>
          </li>
          <li>
            <span>34</span>
            <a href>我关注的人</a>
          </li>
        </ul>
      </div>
    <!-- 个人列表 -->
    <div class="list">
      <wv-group>
        <wv-cell title="我的作品" is-link to="/">
          <img :src="imgIcon" alt slot="icon" class="cell-icon">
        </wv-cell>
        <wv-cell title="最近浏览" is-link to="/">
          <img :src="imgIcon" alt slot="icon" class="cell-icon">
        </wv-cell>
        <wv-cell title="帮助" is-link to="/">
          <img :src="imgIcon" alt slot="icon" class="cell-icon">
        </wv-cell>
        <wv-cell title="设置" is-link to="/">
          <img :src="imgIcon" alt slot="icon" class="cell-icon">
        </wv-cell>
      </wv-group>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/css/myself.css";
</style>
