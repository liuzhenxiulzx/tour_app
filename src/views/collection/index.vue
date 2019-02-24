<template>
  <div>
    <header>
      <!-- <a class="return">
        <img src="../../assets/images/return.png" alt>
      </a> -->
      <span>我的收藏</span>
      <div class="search">
         <!-- <img src="../../assets/images/search2.png" alt> -->
      </div>
    </header>
  
	<div class="one" v-for="(v,k) in collection" :key="k">
		
		<span class="serial">{{v.created_at.substr(5,5)}}</span>
		<div class="img">
			<img  v-if="v.collet.article_img.search(';')"  :src="v.collet.article_img.substring('0',v.collet.article_img.indexOf(';'))" alt=""> 
			 <img :src="v.collet.article_img" alt>   
		</div>
		<router-link :to="'/details/'+v.collet.id">
		<div class="title">
			<h4>{{v.collet.content}}</h4>
			<p>
				<i class="glyphicon glyphicon-thumbs-up"></i><b>{{v.collet.goods_number}}</b>
				<i class="glyphicon glyphicon-comment"></i><b>{{v.collet.comment_number}}</b>
			</p>
		</div>
		 </router-link>
	</div>

	<div class="botton"></div>
    




  </div>
</template>

<style scoped>
@import "../../assets/css/release.css";

</style>

<script>
export default {
		data(){
			return{
				collection:"",
				myid:localStorage.getItem('USER_ID'),
			}
		},
		created:function(){
			this.axios.get('/personalcolle/'+this.myid).then(res=>{
				this.collection = res.data.data
				console.log(res.data.data)
			})
		}
}
</script>


