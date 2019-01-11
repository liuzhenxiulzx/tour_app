<template>
  <div>
    <router-view></router-view>
    <footer class="fixed-footer">
      <ul>
        <li :class="{'activebgc':$route.name=='index'}">
          <router-link to="/">
            <img  v-if="$route.name=='index'" src="../assets/images/nav_index_chk.png">
            <img  v-else src="../assets/images/nav_index.png">
            <p>首页</p>
          </router-link>
        </li>
        <li :class="{'activebgc':$route.name=='collection'}">
          <router-link to="/collection">
            <img  v-if="$route.name=='collection'" src="../assets/images/star_no.png">
            <img v-else src="../assets/images/strar.png">
            <p>收藏</p>
          </router-link>
        </li>
        <li :class="{'activebgc':$route.name=='release'}">
          <router-link to="/release">
            <img  v-if="$route.name=='release'"  src="../assets/images/photo_active.png">
            <img  v-else src="../assets/images/photo.png">
            <p>发布</p>
          </router-link>
        </li>
        <li :class="{'activebgc':$route.name=='chat'}">
          <router-link to="/chat">
            <img  v-if="$route.name=='chat'"  src="../assets/images/nav_chat_chk.png">
            <img v-else src="../assets/images/nav_chat.png">
            <p>聊天</p>
          </router-link>
        </li>
        <li :class="{'activebgc':$route.name=='myself'}">
          <router-link to="/myself">
            <img  v-if="$route.name=='myself'" src="../assets/images/nav_user_chk.png">
            <img v-else src="../assets/images/nav_user.png">
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

<script>
export default {
    data(){
      return{
        
      }
    },
    methods:{
      fabu(){
        
      }
    }
}
</script>


