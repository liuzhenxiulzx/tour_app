<template>
  <div>
      
    <template>
      <div>
        <wv-search-bar :autofocus="false" v-model="value" :result="filterResult"/>
      </div>
    </template>

    <div class="myfollow_list">
        <ul>
            <li>
                <div class="userlist">
                    <img id="head" src="../../assets/images/head.jpg" alt="">
                    <div class="information">
                        <div class="username">奥斯卡</div>
                        <!-- <span class="hisfollow">
                            <i>23</i>
                            <img src="../../assets/images/myfollow.png" alt="">
                        </span>
                        <span class="hisimg">
                            <i>223</i>
                            <img src="../../assets/images/userpotos.png" alt="">
                        </span> -->
                    </div>
                    <div class="followicon">
                        ✙ 已关注
                    </div>
                </div>
            </li>
             <li>
                <div class="userlist">
                    <img id="head" src="../../assets/images/head.jpg" alt="">
                    <div class="information">
                        <div class="username">奥斯卡</div>
                        <!-- <span class="hisfollow">
                            <i>23</i>
                            <img src="../../assets/images/myfollow.png" alt="">
                        </span>
                        <span class="hisimg">
                            <i>223</i>
                            <img src="../../assets/images/userpotos.png" alt="">
                        </span> -->
                    </div>
                    <div class="followicon">
                        ✙ 已关注
                    </div>
                </div>
            </li>
             <li>
                <div class="userlist">
                    <img id="head" src="../../assets/images/head.jpg" alt="">
                    <div class="information">
                        <div class="username">奥斯卡</div>
                        <!-- <span class="hisfollow">
                            <i>23</i>
                            <img src="../../assets/images/myfollow.png" alt="">
                        </span>
                        <span class="hisimg">
                            <i>223</i>
                            <img src="../../assets/images/userpotos.png" alt="">
                        </span> -->
                    </div>
                    <div class="followicon">
                        ✙ 已关注
                    </div>
                </div>
            </li>
        </ul>
    </div>

  </div>
</template>


<style scoped>
@import "../../assets/css/myself.css";
</style>

<script>
export default {
  data () {
    return {
      value: '',
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ]
    }
  },

  computed: {
    filterResult () {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value))
    }
  }
}
</script>