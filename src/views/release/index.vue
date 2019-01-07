<template>
  <div>
    <div id="bodys">
      <div class="top">
        <span>取消</span>
        <div class="send" @click="send">发送</div>
      </div>
      <div class="diving_line"></div>
      <input type="hidden" v-model="blog.user_id">
      <wv-group>
        <wv-textarea placeholder="请输入文本" v-model="blog.content" :max-length="10000"></wv-textarea>
         <div id="upimg">
           <ul>
          
              <li>
                 <img class="imgicon" src="../../assets/images/comment_pic3.png" alt>
              </li>
              
           </ul>
          
        </div>
      </wv-group>
    
    </div>
  </div>
</template>



<style scoped>
@import "../../assets/css/release.css";
</style>

<script>
import { Toast, Dialog } from "we-vue";
export default {
  data() {
    return {
      blog: {
        content: "",
        user_id: ""
      }
    };
  },
  created: function() {
    this.id = localStorage.getItem("USER_ID");
    this.blog.user_id = this.id;
  },
  methods: {
    send() {
      this.axios.post("/article", this.blog).then(res => {
        if (res.data.status_code == 422) {
          if (res.data.errors.user_id) {
            Toast.fail({
              duration: 1000,
              message: "请先登录"
            });
          }

          if (res.data.errors.content) {
            Toast.fail({
              duration: 1000,
              message: "你还没有书写内容哦！"
            });
          }
        } else {
          if (res.data.status_code == 200) {
            Toast.fail({
              duration: 1000,
              message: "发表成功"
            });
          }
          this.blog.content = "";
        }
      });
    }
  }
};
</script>

 