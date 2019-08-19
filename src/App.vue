<template>
  <div id="app">
    <!-- 加载子视图 -->
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<style>
/* 引入全局样式 */
@import './assets/css/bootstrap.min.css';
/* @import './assets/js/bootstrap.min.js'; */

</style>
<script>
export default {
  name:"app",
  provide(){
    return {
      reload:this.reload
    };
  },
  data(){
    return{
      isRouterAlive:true
    };
  },
  methods:{
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    }
  }
}
</script>
