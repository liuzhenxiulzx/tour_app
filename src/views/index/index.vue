<template>
  <div>
    <header>
      <wv-swipe :height="150" :autoplay="3000">
        <wv-swipe-item>
          <img src="../../assets/images/lunbo_01.jpg">
        </wv-swipe-item>
        <wv-swipe-item>
          <img src="../../assets/images/lunbo_02.jpg">
        </wv-swipe-item>
        <wv-swipe-item>
          <img src="../../assets/images/lunbo_03.jpg">
        </wv-swipe-item>
        <wv-swipe-item>
          <img src="../../assets/images/lunbo_04.jpg">
        </wv-swipe-item>
      </wv-swipe>
    </header>
    <div class="nav">
      <wv-tabs swipeable>
        <wv-tab v-for="(v,k) in titlebar" :key="k" :title="v.title">内容</wv-tab>
      </wv-tabs>
    </div>
    <div class="content">
      <ul>
        <li>
          <div class="cent_abstract">
            <router-link to="/details" class="cent_img">
              <img src="../../assets/images/lunbo_02.jpg" alt>
            </router-link>
            <div class="briefly">
              <router-link to="/details" href="#">一套简洁高效的 vue 组件库,封装了 weui.css,其一系列组件适合微信等移动端 web 应用开发</router-link>
            </div>
            <div class="operation">
              <div class="comment">
                <img src="../../assets/images/good.png" alt>
                <span href>203</span>
              </div>
              <div class="thumbs-up">
                <img src="../../assets/images/comment29.png" alt>
                <span href>445</span>
              </div>
              <div class="share">
                <img src="../../assets/images/fenxiang.png" alt>
                <span href>23</span>
              </div>
            </div>
            <div class="line"></div>
            <div class="user">
              <img src="../../assets/images/lunbo_04.jpg" alt>
              <span>夏目南生</span>
            </div>
          </div>
        </li>
        <li>
          <a class="cent_abstract">
            <div class="cent_img">
              <img src="../../assets/images/lunbo_02.jpg" alt>
            </div>
            <div class="briefly">
              <a href="#">一套简洁高效的 vue 组件库,封装了 weui.css,其一系列组件适合微信等移动端 web 应用开发</a>
            </div>
            <div class="operation">
              <div class="comment">
                <img src="../../assets/images/good.png" alt>
                <span href>203</span>
              </div>
              <div class="thumbs-up">
                <img src="../../assets/images/comment29.png" alt>
                <span href>445</span>
              </div>
              <div class="share">
                <img src="../../assets/images/fenxiang.png" alt>
                <span href>23</span>
              </div>
            </div>
            <div class="line"></div>
            <div class="user">
              <img src="../../assets/images/lunbo_04.jpg" alt>
              <span>夏目南生</span>
            </div>
          </a>
        </li>
        <li>
          <a class="cent_abstract">
            <div class="cent_img">
              <img src="../../assets/images/lunbo_02.jpg" alt>
            </div>
            <div class="briefly">
              <a href="#">一套简洁高效的 vue 组件库,封装了 weui.css,其一系列组件适合微信等移动端 web 应用开发</a>
            </div>
            <div class="operation">
              <div class="comment">
                <img src="../../assets/images/good.png" alt>
                <span href>203</span>
              </div>
              <div class="thumbs-up">
                <img src="../../assets/images/comment29.png" alt>
                <span href>445</span>
              </div>
              <div class="share">
                <img src="../../assets/images/fenxiang.png" alt>
                <span href>23</span>
              </div>
            </div>
            <div class="line"></div>
            <div class="user">
              <img src="../../assets/images/lunbo_04.jpg" alt>
              <span>夏目南生</span>
            </div>
          </a>
        </li>
        <li>
          <a class="cent_abstract">
            <div class="cent_img">
              <img src="../../assets/images/lunbo_02.jpg" alt>
            </div>
            <div class="briefly">
              <a href="#">一套简洁高效的 vue 组件库,封装了 weui.css,其一系列组件适合微信等移动端 web 应用开发</a>
            </div>
            <div class="operation">
              <div class="comment">
                <img src="../../assets/images/good.png" alt>
                <span href>203</span>
              </div>
              <div class="thumbs-up">
                <img src="../../assets/images/comment29.png" alt>
                <span href>445</span>
              </div>
              <div class="share">
                <img src="../../assets/images/fenxiang.png" alt>
                <span href>23</span>
              </div>
            </div>
            <div class="line"></div>
            <div class="user">
              <img src="../../assets/images/lunbo_04.jpg" alt>
              <span>夏目南生</span>
            </div>
          </a>
        </li>
        <li>
          <a class="cent_abstract">
            <div class="cent_img">
              <img src="../../assets/images/lunbo_02.jpg" alt>
            </div>
            <div class="briefly">
              <a href="#">一套简洁高效的vueee组件库,封装了 weui.css,其一系列组件适合微信等移动端 web 应用开发</a>
            </div>
            <div class="operation">
              <div class="comment">
                <img src="../../assets/images/good.png" alt>
                <span href>203</span>
              </div>
              <div class="thumbs-up">
                <img src="../../assets/images/comment29.png" alt>
                <span href>445</span>
              </div>
              <div class="share">
                <img src="../../assets/images/fenxiang.png" alt>
                <span href>23</span>
              </div>
            </div>
            <div class="line"></div>
            <div class="user">
              <img src="../../assets/images/lunbo_04.jpg" alt>
              <span>夏目南生</span>
            </div>
          </a>
        </li>
        <li>
          <a class="cent_abstract">
            <div class="cent_img">
              <img src="../../assets/images/lunbo_02.jpg" alt>
            </div>
            <div class="briefly">
              <a href="#">一套简洁高效的vueee组件库,封装了 weui.css,其一系列组件适合微信等移动端 web 应用开发</a>
            </div>
            <div class="operation">
              <div class="comment">
                <img src="../../assets/images/good.png" alt>
                <span href>203</span>
              </div>
              <div class="thumbs-up">
                <img src="../../assets/images/comment29.png" alt>
                <span href>445</span>
              </div>
              <div class="share">
                <img src="../../assets/images/fenxiang.png" alt>
                <span href>23</span>
              </div>
            </div>
            <div class="line"></div>
            <div class="user">
              <img src="../../assets/images/lunbo_04.jpg" alt>
              <span>夏目南生</span>
            </div>
          </a>
        </li>
         <li>
          <a class="cent_abstract">
            <div class="cent_img">
              <img src="../../assets/images/lunbo_02.jpg" alt>
            </div>
            <div class="briefly">
              <a href="#">一套简洁高效的 vue 组件库,封装了 weui.css,其一系列组件适合微信等移动端 web 应用开发</a>
            </div>
            <div class="operation">
              <div class="comment">
                <img src="../../assets/images/good.png" alt>
                <span href>203</span>
              </div>
              <div class="thumbs-up">
                <img src="../../assets/images/comment29.png" alt>
                <span href>445</span>
              </div>
              <div class="share">
                <img src="../../assets/images/fenxiang.png" alt>
                <span href>23</span>
              </div>
            </div>
            <div class="line"></div>
            <div class="user">
              <img src="../../assets/images/lunbo_04.jpg" alt>
              <span>夏目南生</span>
            </div>
          </a>
        </li>
        
      </ul>
    </div>
    <div class="interval"></div>
  </div>
</template>


<style scoped>
@import "../../assets/css/index.css";
</style>

<script>
export default {
  data(){
    return{
      titlebar:[
        {
          title:'最新',
        },
        {
          title:'热门',
        },
        {
          title:'排行',
        }
      ]
    }
  }
}
</script>
