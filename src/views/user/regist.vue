<template>
    <div>
		<div class="bodyall">
			<h2>注册</h2>
       		<form action="#" method="post">
			<div  class="form-control">
				<span><i class="glyphicon glyphicon-user"></i></span>
				<input type="text" class="inputtext" placeholder="用户名">
			</div>
			<div  class="form-control">
				<span><i class="glyphicon glyphicon-lock"></i></span>
				<input type="password" class="inputtext" placeholder="密码">
			</div>
			<div  class="form-control">
				<span><i class="glyphicon glyphicon-lock"></i></span>
				<input type="password" class="inputtext" placeholder="确认密码">
			</div>
			<div  class="form-control">
				<span><i class="glyphicon glyphicon-envelope"></i></span>
				<input type="text" class="inputtext" placeholder="邮箱">
			</div>
			<div  class="form-control" id="btn">
				<p>马上注册</p>
			</div>
			</form>
			<div class="gologin">
				<p>已有账户？</p>
				<a href="#">&nbsp;马上登陆</a>
			</div>
		</div>
    </div>
</template>

<script>
export default {
	
}
</script>



<style scoped>
    @import '../../assets/css/regist.css';
</style>
