<template>
    <div>
		<div class="bodyall">
			<h2>注册</h2>
			<div  class="form-control">
				<span><i class="glyphicon glyphicon-user"></i></span>
				<input type="text" class="inputtext" v-model="fromdata.username" placeholder="用户名">
			</div>
			<div  class="form-control">
				<span><i class="glyphicon glyphicon-lock"></i></span>
				<input type="password" class="inputtext" v-model="fromdata.password" placeholder="密码">
			</div>
			<div  class="form-control">
				<span><i class="glyphicon glyphicon-lock"></i></span>
				<input type="password" class="inputtext" v-model="fromdata.password_confirmation" placeholder="确认密码">
			</div>
			<div  class="form-control">
				<span><i class="glyphicon glyphicon-earphone"></i></span>
				<input type="text" class="inputtext" v-model="fromdata.phone" placeholder="手机号">
			</div>
			<div @click="doregist" class="form-control" id="btn">
				<p>马上注册</p>
			</div>
			<div class="gologin">
				<p>已有账户？</p>
				<a href="#">&nbsp;马上登陆</a>
			</div>
		</div>
    </div>
</template>

<script>
import { Toast } from 'we-vue'
export default {
	data(){
		return {
			fromdata:{
				username:'',
				password:'',
				password_confirmation:'',
				phone:'',
			}
		}
	},
	methods:{
		doregist(){
			this.axios.post('/members',this.fromdata)
			.then(res=>{

				if(res.data.status_code == 200)
				{
					this.$router.push('/login');
				}
				else if(res.data.errors.username)
				{
					Toast.fail({
						duration: 1000,
						message: '该用户名已被注册'
					})
				}
				else if(res.data.errors.password)
				{
					Toast.fail({
						duration: 1000,
						message: '密码不一致'
					})
				}
				else if(res.data.errors.phone)
				{
					Toast.fail({
						duration: 1000,
						message: '手机号格式不正确'
					})
				}
			})
		}
	}	
	   
}
</script>



<style scoped>
    @import '../../assets/css/regist.css';
</style>
