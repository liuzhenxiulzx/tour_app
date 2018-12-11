<template>
  <div>
    <header>
      <router-link to="/chat" class="return">
        <img src="../../assets/images/return.png" alt>
      </router-link>
      <span>私信</span>
      <div class="search">
        <img src="../../assets/images/notice.png" alt>
      </div>
    </header>
    <!-- 搜索 -->
    <template>
      <div class="search">
        <wv-search-bar :autofocus="false" v-model="value" :result="filterResult"/>
      </div>
    </template>
    <!-- 消息来源 -->
    <div class="news">
      <ul>
        <li>
          <router-link to="/privatechat" href>
            <div class="private_head">
              <img id="head_img" src="../../assets/images/lunbo_01.jpg" alt>
            </div>
            <span class="news_source">晨曦
              <wv-badge color="red">20</wv-badge>
            </span>
            <div class="newcontent">撒旦教佛撒娇的发斯蒂芬</div>
          </router-link>
        </li>
        <li>
          <router-link to="/privatechat" href>
            <div class="private_head">
              <img id="head_img" src="../../assets/images/lunbo_01.jpg" alt>
            </div>
            <span class="news_source">晨曦
              <wv-badge color="red">20</wv-badge>
            </span>
            <div class="newcontent">撒旦教佛撒娇的发斯蒂芬</div>
          </router-link>
        </li>
        <li>
          <router-link to="/privatechat" href>
            <div class="private_head">
              <img id="head_img" src="../../assets/images/lunbo_01.jpg" alt>
            </div>
            <span class="news_source">晨曦
              <wv-badge color="red">20</wv-badge>
            </span>
            <div class="newcontent">撒旦教佛撒娇的发斯蒂芬</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      defaultResult: [
        "Apple",
        "Banana",
        "Orange",
        "Durian",
        "Lemon",
        "Peach",
        "Cherry",
        "Berry",
        "Core",
        "Fig",
        "Haw",
        "Melon",
        "Plum",
        "Pear",
        "Peanut",
        "Other"
      ]
    };
  },

  computed: {
    filterResult() {
      return this.defaultResult.filter(value =>
        new RegExp(this.value, "i").test(value)
      );
    }
  }
};
</script>


<style scoped>
@import "../../assets/css/chat.css";
</style>