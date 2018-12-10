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
    <div class="private_letter">
      <img src="../../assets/images/news2.png" alt>
      <p>私信</p>
      <span>暂无私信</span>
      <img id="right" src="../../assets/images/right.png" alt>
    </div>

    <div class="notice_list">
      <div class="notice_nav">
        <div class="left">通知列表</div>
      </div>

      <div class="all_notice">
        <ul>
          <li>
            <div class="head">
              <img src="../../assets/images/lunbo_01.jpg" alt>
              <div class="username">
                tom
                <span>关注了</span>
                你
              </div>
              
         
            </div>
          </li>
          <li>
            <div class="head">
              <img src="../../assets/images/lunbo_01.jpg" alt>
               <div class="username">
                tom
                <span>关注了</span>
                你
              </div>
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