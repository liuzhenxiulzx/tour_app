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
          <!-- <a @click="cancelfollow" >已关注</a> -->
          <a @click="follow">关注</a>
          
          <!-- <img  @click="follow" src="../../assets/images/chat_add.png" alt=""> -->
        </div>
      </div>
    </div>

    <!--评论-->
    <div class="guide-comment">
        <div class="comment-box">
            <div class="container">
                评论（2200）
            </div>
            <input type="text" v-model="commentAll.comment" class="comment-input" placeholder="写评论">
            <input type="button" @click="send" value="发送" class="comment-send">
        </div>
        <div class="comment-list">

            <div class="comment-sub" v-for="(v,k) in comlist" :key="k">
                <div class="comment-sub-title">
                    <div class="comment-pic">
                         <img src="../../assets/images/lunbo_01.jpg" alt="">
                    </div>
                    <div class="comment-info">
                        <div class="comment-name">
                            飞奔的蜗牛
                        </div>  
                        <div class="comment-time">
                            {{v.created_at}}
                        </div>
                    </div>
                </div>
                <div class="comment-content">
                   {{v.comment}}
                </div>
            </div>
         
        </div>
        <!-- <div class="comment-more">
            加载全部评论
        </div> -->
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
import { Toast } from 'we-vue'
export default {
    data(){
        return {
            details:"",
            commentAll:{
                article_id:"",
                comuser_id: localStorage.getItem("USER_ID"),
                comment:''
            },
            comlist:"",  //评论信息
            allid:{
                my_id:localStorage.getItem("USER_ID"),
                other_id:"",
            },
        }
    },
    methods:{
        // 发表评论
        send(){
            this.commentAll.article_id = this.$route.params.id
            this.axios.post('/comment',this.commentAll)
            .then(res=>{
                if(res.data.status_code==200){
                    Toast.success('发表成功');
                }
                // 清空输入框
                this.commentAll.comment = ''
            })
        },
        // 添加关注
        follow(){
            if(this.allid.my_id==this.allid.other_id){
                Toast.text({
                    duration: 1000,
                    message: '不可以关注自己哦'
                })
            }
            else
            {
            
                // 1.调用接口
                this.axios.post('/follows',this.allid)
                .then(res=>{
                    if(res.data.status_code==422)
                    {
                        Toast.text({
                            duration: 1000,
                            message: '您已关注过了哦'
                        })
                    }
                    else if(res.data.status_code==200)
                    {
                        Toast.success('关注成功');
                    }
                        
                })

            }
        },
        // 取消关注
        cancelfollow(){
            this.axios.post('/cancel',this.allid)
            .then(res=>{
              if(res.data.status_code==200){
                   Toast.success('取消关注成功');
              }
            })
        }
    },
    created:function(){
        // 获取文章内容
        this.axios.get('/details/'+this.$route.params.id)
        .then(res=>{
           this.details = res.data.data
           //设置文章用户id
           this.allid.other_id = this.details.user_id;
        })

        //获取评论
         this.axios.get('/getcomment/'+this.$route.params.id)
        .then(res=>{
           this.comlist = res.data.data
        })
        // console.log(this.allid)
        // 
        
    }
}
</script>
