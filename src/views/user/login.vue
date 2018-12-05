<template>
    <div>
		<div>
			<img src="../../assets/images/login.jpg" alt="">
		</div>
        
		<div class="bodyall">
			<h2>登陆</h2>
       		<form action="#" method="post">
			<div  class="form-control">
				<span><i class="glyphicon glyphicon-user"></i></span>
				<input type="text" class="inputtext" placeholder="用户名">
			</div>
			<div  class="form-control">
				<span><i class="glyphicon glyphicon-lock"></i></span>
				<input type="password"  class="inputtext" placeholder="密码">
			</div>
			<div  id="btn">
				<p>马上登陆</p>
			</div>
            <p class="or">或</p>
            <div  id="otherbtn">
				<p>使用QQ登陆</p>
			</div>
			</form>
			<div class="gologin">
				<p>还没有账户？</p>
				<a href="#">&nbsp;马上注册</a>
			</div>
		</div>
    </div>
</template>

<script>
export default {
	
}
</script>



<style scoped>
    @import '../../assets/css/login.css';
</style>
