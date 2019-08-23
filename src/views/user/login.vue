<template>
    <div>
		<div>
			<img id="logimg" src="../../assets/images/login.jpg" alt="">
		</div>
        
		<div class="bodyall">
			<h2>登陆</h2>
			<div  class="form-control">
				<span class="loginspan"><i class="glyphicon glyphicon-user"></i></span>
				<input type="text" style="BACKGROUND-COLOR: transparent;" class="inputtext" v-model="logindata.username" placeholder="用户名">
			</div>
			<div  class="form-control">
				<span class="loginspan"><i class="glyphicon glyphicon-lock"></i></span>
				<input type="password" style="BACKGROUND-COLOR: transparent;"  autocomplete="off" class="inputtext" v-model="logindata.password" placeholder="密码">
			</div>
			<div @click="dologin" id="btn">
				<p>马上登陆</p>
			</div>
            <!-- <p class="or">或</p>
            <div  id="otherbtn">
				<p>使用QQ登陆</p>
			</div> -->
			<div class="gologin">
				<p>还没有账户？</p>
				<a @click="regist()">&nbsp;马上注册</a>
			</div>
		</div>
    </div>
</template>

<script>
import { Toast } from 'we-vue'
export default {
	data(){
		return{
			logindata:{
				username:'',
				password:''
			}
		}
	},
	methods:{
		dologin(){
			this.axios.post('/authorizations',this.logindata)
			.then(res=>{
				if(res.data.status_code == 200)
				{
					// 设置token
                    localStorage.setItem('ACCESS_TOKEN',res.data.data.ACCESS_TOKEN);
                    localStorage.setItem('USER_ID',res.data.data.USER_ID);
					
					this.$router.push('/');
					// window.open('/')
					this.$router.go(1)
				}
				else if(res.data.status_code == 403)
				{
					Toast.fail({
						duration: 1000,
						message: '账号不存在'
					})
				}
				else
				{
					Toast.fail({
						duration: 1000,
						message: '密码错误'
					})
				}
			});
		},
		regist(){
			this.$router.push('/regist');
		}
	},
}
</script>



<style scoped>
    @import '../../assets/css/login.css';
</style>
