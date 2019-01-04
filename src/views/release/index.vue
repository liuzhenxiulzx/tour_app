<template>
  <div>
    <div id="bodys">

      <div class="top">
        <span>取消</span>
        <div class="send" @click="send">发送</div>
      </div>
        <div class="diving_line"></div>
        <wv-group>
           <wv-textarea placeholder="请输入文本"></wv-textarea>
        </wv-group>
    </div>
  </div>
</template>



<style scoped>
@import "../../assets/css/release.css";
</style>

<script>
import { Toast,Dialog  } from 'we-vue'
export default {
  data(){
    return {

    }
  },
  methods:{
      send(){
        Toast.success('发表成功');
      }
  }
}
</script>

 