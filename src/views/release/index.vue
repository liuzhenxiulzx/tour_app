<template>
  <div>
    <div id="bodys">
      <div class="top">
        <span>取消</span>
        <div class="send"  @click="send">发送</div>
      </div>
      <div class="diving_line"></div>
      <input type="hidden" v-model="blog.user_id">
      <wv-group>
        <wv-textarea placeholder="请输入文本" v-model="blog.content" :max-length="10000"></wv-textarea>
      </wv-group>

      <el-upload
        :action="domain"
        list-type="picture-card"
        :before-upload="beforeUpload"
        :auto-upload="true"
        accept="image/jpeg,image/gif,image/png"
        :http-request="upqiniu"
        :on-remove="moveimg"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="blog.article_img"  id="one" alt>
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
        article_img: []
      },
      dialogVisible: false,
      domain: "http://upload.qiniup.com",
      qiniuaddr: "qiniuyun.liuzhenxiu.cn", // 七牛云的图片外链地址
      imagesurl:'',
      key:''
    };
  },
  created: function() {
    // 获取用户id
    this.id = localStorage.getItem("USER_ID");
    this.blog.user_id = this.id;
  },
  methods: {
   
    send(){
      // 将图片数组转化为字符串保存
      this.blog.article_img = this.blog.article_img.join(";");
      
      this.axios.post("/article", this.blog).then(res => {
        if (res.data.status_code == 422) 
        {
            if (res.data.errors.user_id) 
            {
              Toast.fail({
                duration: 1000,
                message: "请先登录"
              });
            }

            if (res.data.errors.content) 
            {
              Toast.fail({
                duration: 1000,
                message: "你还没有书写内容或上传图片哦！"
              });
            }

            if (res.data.errors.article_img) 
            {
              Toast.fail({
                duration: 1000,
                message: "你还没有上传图片哦！"
              });
            }
        }
        else
        {
            if (res.data.status_code == 200) {
              Toast.success("发表成功");
            }
            this.$router.push('/');
        }

      });

    },


    // 上传图片到七牛云
    upqiniu (req) {
      const config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }
      let filetype = ''
      if (req.file.type === 'image/png') {
        filetype = 'png'
      } else {
        filetype = 'jpg'
      }
      
      
      // 重命名要上传的文件
      const keyname = 'tour' + new Date() + Math.floor(Math.random() * 100) + '.' + filetype
      // 从后端获取上传凭证token
      this.axios.get('/token').then(res => {
        const formdata = new FormData()
        formdata.append('file', req.file)
        formdata.append('token', res.data.data)
        formdata.append('key', keyname)
        // 获取到凭证之后再将文件上传到七牛云空间
        this.axios.post(this.domain, formdata,config).then(res => {
          // console.log(res)
          this.blog.article_img.push('http://' + this.qiniuaddr + '/' + res.data.key);
          this.key = res.data.key
          
        }).catch(error=>{
          console.log(error)
        })
      })

    },
    // 验证文件合法性
    beforeUpload (file) {
      // console.log(file)
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/bmp'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('不支持的图片格式')
      }
      if (!isLt2M) {
        this.$message.error('图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    moveimg(file,fileList){
      // 删除选定的图片
        const suffx = fileList.length -1;
        this.blog.article_img.splice(suffx,1)
    }
  },
};
</script>

 