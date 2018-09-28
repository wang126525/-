<template>
	<ul>
		<li ><router-link to="/home">首页</router-link></li>
		<li ><router-link to="/kind">分类</router-link></li>
		<li ><router-link to="/cart">购物车</router-link></li>
		<li ><router-link to="/user">我的</router-link></li>
		<li ><router-link to="/more">更多</router-link></li>
	</ul>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.router-link-exact-active.router-link-active{
		color:#f66;
	}
</style>