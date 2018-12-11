<template>
  <div>
    <header>
      <a class="return">
        <img src="../../assets/images/return.png" alt>
      </a>
      <span>通知</span>
      <div class="search">
        <img src="../../assets/images/notice.png" alt>
      </div>
    </header>
    <!-- 私信 -->
    <router-link  to="/privatenews" class="private_letter">
      <img src="../../assets/images/news2.png" alt>
      <p>私信</p>
      <span>暂无私信</span>
      <img id="right" src="../../assets/images/right.png" alt>
    </router-link>

    <div class="notice_list">
      <div class="notice_nav">
        <div class="left">通知列表</div>
      </div>

      <div class="all_notice">
        <ul>
          <li>
            <div class="head">
              <img id="head_img" src="../../assets/images/lunbo_01.jpg" alt>
              <div class="username">
                tom
                <span>关注了</span>
                你
              </div>
              <i class="time">3分钟前</i>
            </div>
          </li>
          <li>
            <div class="head">
              <img id="head_img" src="../../assets/images/lunbo_01.jpg" alt>
               <div class="username">
                max
                <span>评论了</span>
                你的文章
              </div>
              <div class="article">
                <img id="article_img" src="../../assets/images/article.jpg" alt="">
                <span class="article_content">
                    夕阳无限好 只是近黄昏 喜欢天空的每一种变化 夕阳无限好 只是近黄昏 喜欢天空的每一种变化
                </span>
              </div>
               <i class="times">3分钟前</i>
            </div>
          </li>
            <li>
            <div class="head">
              <img id="head_img" src="../../assets/images/lunbo_01.jpg" alt>
               <div class="username">
                jack
                <span>赞了</span>
                你的文章
              </div>
              <div class="article">
                <img id="article_img" src="../../assets/images/article.jpg" alt="">
                <span class="article_content">
                    夕阳无限好 只是近黄昏 喜欢天空的每一种变化 夕阳无限好 只是近黄昏 喜欢天空的每一种变化
                </span>
              </div>
               <i class="times">3分钟前</i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<style scoped>
@import "../../assets/css/chat.css";
</style>