<template>
  <div>
    <router-view></router-view>
    <footer class="fixed-footer">
      <ul>
        <li class="active">
          <router-link to="/">
            <img src="../assets/images/nav_index.png">
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/collection">
            <img src="../assets/images/strar.png">
            <p>收藏</p>
          </router-link>
        </li>
        <li>
          <router-link to="/release">
            <img src="../assets/images/photo.png">
            <p>发布</p>
          </router-link>
        </li>
        <li>
          <router-link to="/chat">
            <img src="../assets/images/nav_chat.png">
            <p>聊天</p>
          </router-link>
        </li>
        <li>
          <router-link to="/myself">
            <img src="../assets/images/nav_user.png">
            <p>我</p>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>


<style scoped>
@import "../assets/css/index.css";
</style>

