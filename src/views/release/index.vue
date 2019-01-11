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
        <!-- <div id="upimg">
           <ul>
          
              <li>
                 <img class="imgicon" src="../../assets/images/comment_pic3.png" alt>
              </li>
              
           </ul>
          
        </div>-->
      </wv-group>

      <el-upload
        :action="domain"
        list-type="picture-card"
        accept="image/jpeg, image/gif, image/png, image/bmp"
        :on-success="handleImageScucess"
        :before-upload="beforeAvatarUpload"
        :multiple="true"
        :auto-upload="false"
        :on-change="onchange"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="blog.article_img" id="one" alt>
      </el-dialog>
      <div class="bootoms"></div>
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
        user_id: "",
        article_img: ""
      },
      dialogVisible: false,

      domain: "http://upload.qiniup.com",
      qiniuaddr: "http://pl0c9y4zt.bkt.clouddn.com", // 七牛云的图片外链地址
      qiniuData: {
        key: "", //图片名字处理
        token: "", //七牛云token
        keyname: ""
      }
    };
  },
  created: function() {
    // 获取用户id
    this.id = localStorage.getItem("USER_ID");
    this.blog.user_id = this.id;
    // 获取图片上传的token
    this.axios.get("/token").then(res => {
      this.qiniuData.token = res.data.data;
    });
  },
  methods: {
    send() {
      this.qiniuData.key =
        "tour" + new Date() + Math.floor(Math.random() * 100) + "." + "png"; //重命名图片
      const config = {
        "Content-Type": "multipart/form-data"
      };
      this.axios
        .post("http://upload.qiniup.com", this.qiniuData, this.config)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });

      // this.axios.post("/article", this.blog).then(res => {
      //   if (res.data.status_code == 422) {
      //     if (res.data.errors.user_id) {
      //       Toast.fail({
      //         duration: 1000,
      //         message: "请先登录"
      //       });
      //     }

      //     if (res.data.errors.content) {
      //       Toast.fail({
      //         duration: 1000,
      //         message: "你还没有书写内容哦！"
      //       });
      //     }
      //   } else {
      //     // console.log(res.data);
      //     if (res.data.status_code == 200) {
      //       Toast.success("发表成功");
      //     }
      //     this.blog.content = "";
      //   }
      //   // console.log(this.blog);
      // });
    },

    handleImageScucess(res, file, fileList) {
      console.log(this.file);
      // this.imageUrl = 'http://pl0c9y4zt.bkt.clouddn.com/'+ res.key
      console.log(file);
    },
    onchange(file, fileList) {
      this.qiniuData.keyname = file.name;
    },
    beforeAvatarUpload(file) {

    }


  }


  
};
</script>

 