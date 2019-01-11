<template>
  <div>
    <header>
      <router-link to="/" class="return">
        <img src="../../assets/images/return.png">
      </router-link >
      <span>文章详情</span>
    </header>

    <!-- 文章内容 -->
    <div class="blog_conten">
      <div class="wrap">
        {{details.content}}
      </div>
      <div class="author">
        <div class="guide-pic-sm">
          <img src="../../assets/images/article.jpg">
        </div>
        <div class="guide-name-sm">飞奔的蜗牛</div>

        <div class="guide-contact">
          <a href="guide-info.html">关注</a>
          <img src="../../assets/images/chat_add.png" alt="">
        </div>
      </div>
    </div>

    <!--评论-->
    <div class="guide-comment">
        <div class="comment-box">
            <div class="container">
                评论（2200）
            </div>
            <input type="text" class="comment-input" placeholder="写评论">
            <input type="button" value="发送" class="comment-send">
        </div>
        <div class="comment-list">
            <div class="comment-sub">
                <div class="comment-sub-title">
                    <div class="comment-pic">
                         <img src="../../assets/images/lunbo_01.jpg" alt="">
                    </div>
                    <div class="comment-info">
                        <div class="comment-name">
                            飞奔的蜗牛
                        </div>
                        <div class="comment-time">
                            2018.01.01
                        </div>
                    </div>
                </div>
                <div class="comment-content">
                好地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。
                </div>
            </div>
             <div class="comment-sub">
                <div class="comment-sub-title">
                    <div class="comment-pic">
                         <img src="../../assets/images/lunbo_01.jpg" alt="">
                    </div>
                    <div class="comment-info">
                        <div class="comment-name">
                            飞奔的蜗牛
                        </div>
                        <div class="comment-time">
                            2018.01.01
                        </div>
                    </div>
                </div>
                <div class="comment-content">
                好地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。
                </div>
            </div>
             <div class="comment-sub">
                <div class="comment-sub-title">
                    <div class="comment-pic">
                         <img src="../../assets/images/lunbo_01.jpg" alt="">
                    </div>
                    <div class="comment-info">
                        <div class="comment-name">
                            飞奔的蜗牛
                        </div>
                        <div class="comment-time">
                            2018.01.01
                        </div>
                    </div>
                </div>
                <div class="comment-content">
                好地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。晚上更漂亮的地方。
                </div>
            </div>
        </div>
        <div class="comment-more">
            加载全部评论
        </div>
        <div class="comment-state">
            <div class="comment-like">
                 <img src="../../assets/images/like.png" alt="">
                <span>2.9万</span>
            </div>
            <div class="comment-dislike">
                 <img src="../../assets/images/dislike.png" alt="">
                <span>1200</span>
            </div>
            <div class="comment-love">
                 <img src="../../assets/images/love.png" alt="">
                <span>2200</span>
            </div>
            <div class="comment-share">
                 <img src="../../assets/images/share.png" alt="">
            </div>
        </div>
    </div>

  </div>
</template>


<style scoped>
@import "../../assets/css/index.css";
</style>


<script>
export default {
    data(){
        return {
            details:"",
        }
    },
    methods:{
        
    },
    created:function(){
        this.axios.get('/details/'+this.$route.params.id)
        .then(res=>{
           this.details = res.data.data
           console.log(res.data.data)
        })
    }
}
</script>
