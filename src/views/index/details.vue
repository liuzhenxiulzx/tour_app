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
         <div>
          <img :src="details.article_img" width="295px" height="250px" alt="">
        </div>
      </div>
     
      <div class="author">
        <div class="guide-pic-sm">
          <img :src="author.header">
        </div>
        <div class="guide-name-sm">{{author.username}}</div>

        <div class="guide-contact">
          <a v-if="isfollow" @click="cancelfollow" >已关注</a>
          <a v-else @click="follow">关注</a>
        </div>
      </div>
    </div>

    <!--评论-->
    <div class="guide-comment">
        <div class="comment-box">
            <div class="container">
                评论（{{this.comlist.length}}）
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
                            {{v.comentuser.username}}
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
                 <img  v-if="details.goodup && details.goodup.isgoodup == 0" src="../../assets/images/index_like2.png" @click="switchbgiup()" alt>
                 <img  v-else-if="details.goodup && details.goodup.isgoodup == 1" src="../../assets/images/like.png" @click="switchbgiup()" alt>
                 <img  v-else src="../../assets/images/index_like2.png" @click="switchbgiup()" alt>
                <span>{{details.goods_number}}</span>
            </div>
            <div class="comment-dislike">
                 <img v-if="details.goodup && details.goodup.isgoodup == 2" src="../../assets/images/dislike2.png" @click="switchbgi()" alt="">
                 <img v-else-if="details.goodup && details.goodup.isgoodup == 3" src="../../assets/images/dislike.png" @click="switchbgi()" alt="">
                 <img v-else src="../../assets/images/dislike.png" @click="switchbgi()" alt="">
                <span>{{details.negative_comment}}</span>
            </div>
            <div class="comment-love">
                 <img v-if="details.collections && details.collections.iscollection == 1" src="../../assets/images/star_chk.png" @click="forward()" alt="">
                 <img v-else src="../../assets/images/star_no.png" @click="cancelforward()" alt="">
                <span>{{details.collect_number}}</span>
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
    inject:['reload'],
    data(){
        return {
            details:"",
            article_id: '',
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
            author:"",
            addcomnumber:{ //添加文章数
                id:"",
                comment_number:""
            },
            bloguserid:'',
            isfollow:false,
            gree: { //点赞信息
                upuser_id: localStorage.getItem("USER_ID"),
                article_id: "",
                isgoodup: "",
            },
           collect:{ //收藏信息
                user_id: localStorage.getItem("USER_ID"),
                article_id: "",
                iscollection: "",
            },
            // addnumber:{ //增加收藏数量
            //     id:"",
            //     collect_number:"",
            // }
        }
    },
    methods:{
        // 发表评论
        send(){
            // 设置评论的文章
            this.commentAll.article_id = this.$route.params.id
            // 设置文章id
            this.addcomnumber.id = this.$route.params.id
            // 设置评论数
            this.addcomnumber.comment_number = this.details.comment_number + 1;

            this.axios.post('/comment',this.commentAll)
            .then(res=>{
                if(res.data.status_code==200){
                    Toast.success('发表成功');
                }
                // 评论数加一
                
                this.axios.post('/addcommentnum',this.addcomnumber).then(res=>{})
                // 清空输入框
                this.commentAll.comment = ''

                setTimeout(()=>{
                  this.reload();
                 },1000)
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
                      setTimeout(()=>{
                        this.reload();
                     },1000)     
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
                setTimeout(()=>{
                  this.reload();
                 },1000)
            })          
        },
        // 点赞
        switchbgiup(){
            if(this.details.goodup && this.details.goodup.isgoodup == 0 ) {
                this.gree.isgoodup = '1'
                this.axios.post("/addagree", {
                    id:this.article_id,
                    goods_number: this.details.goods_number + 1
                })
            } else if(this.details.goodup && this.details.goodup.isgoodup == 1) {
                this.gree.isgoodup = '0'
                this.axios.post("/addagree", {
                    id:this.article_id,
                    goods_number: this.details.goods_number - 1
                })
            } else if(this.details.goodup && this.details.goodup.isgoodup == 3 || this.details.goodup.isgoodup == 2) {
                this.gree.isgoodup = '1'
                this.axios.post("/addagree", {
                    id:this.article_id,
                    goods_number: this.details.goods_number + 1
                })
                this.axios.post("/addnegative", {
                    id:this.article_id,
                    negative_comment: this.details.negative_comment - 1
                })
            }
            // 修改点赞状态
            this.axios.post("/supports", this.gree).then(res => {
                this.gree.isgoodup = this.details.goodup.isgoodup
            });
            setTimeout(()=>{
                this.reload();
            },1000)
        },
        // 差评
        switchbgi(){
            if(this.details.goodup && this.details.goodup.isgoodup == 1 || this.details.goodup.isgoodup == 0 ) {
               this.gree.isgoodup = '2'
                this.axios.post("/addnegative", {
                    id:this.article_id,
                    negative_comment: this.details.negative_comment + 1
                })
                this.axios.post("/addagree", {
                    id:this.article_id,
                    goods_number: this.details.goods_number - 1
                })
            } else if(this.details.goodup && this.details.goodup.isgoodup == 2) {
                this.gree.isgoodup = '3'
                this.axios.post("/addnegative", {
                    id:this.article_id,
                    negative_comment: this.details.negative_comment - 1
                })
            }
            // 修改点赞状态
            this.axios.post("/supports", this.gree).then(res => {
                this.gree.isgoodup = this.details.goodup.isgoodup
            });
            setTimeout(()=>{
                this.reload();
            },1000)
        },
        // 文章收藏
        forward(){
            this.collect.iscollection = '0'
            // 修改收藏数量
             this.axios.post("/addcollenumber", {
                 id:this.article_id,
                 collect_number: this.details.collect_number - 1
             })
            // 修改收藏状态
            this.axios.post('/collection',this.collect).then(res=>{
                this.collect.iscollection = this.details.collections.iscollection
            })
            setTimeout(()=>{
                this.reload();
            },1000)
        },
        //取消收藏
        cancelforward () {
            this.collect.iscollection = '1'
           // 修改收藏数量
            this.axios.post("/addcollenumber", {
                 id:this.article_id,
                 collect_number: this.details.collect_number + 1
             })
            // 修改收藏状态
            this.axios.post('/collection',this.collect).then(res=>{
                this.collect.iscollection = this.details.collections.iscollection
            })
            setTimeout(()=>{
                this.reload();
            },1000)
        }
    },
    created:function(){
        // 获取文章内容
        this.axios.get('/details/'+this.$route.params.id)
        .then(res=>{
           this.details = res.data.data
           console.log(this.details);
           //设置文章用户id
           this.allid.other_id = this.details.user_id;
           this.gree.article_id = this.details.id;
           this.collect.article_id = this.details.id;
           this.article_id = this.details.id;
           this.bloguserid = res.data.data.user_id
           this.author = this.details.user_id;
                 // 获取文章作者信息
                this.axios.get('/author/'+ res.data.data.user_id).then(res=>{
                    this.author = res.data.data
                })
                // 判断是否关注
                 this.axios.get('/isfollow/'+localStorage.getItem("USER_ID")+'/'+res.data.data.user_id).then(res=>{
                    if(res.data.data == 1)
                    {
                        this.isfollow = true;
                    }
                })
        })

        //获取评论
         this.axios.get('/getcomment/'+this.$route.params.id)
        .then(res=>{
           this.comlist = res.data.data
        })

    }
}
</script>
