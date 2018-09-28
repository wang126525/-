<template>
	<div >
		<ul>
			<li><router-link to="/detail/0">第00001个</router-link></li>
			<li><router-link to="/detail/1">第00002个</router-link></li>
			<li><router-link to="/detail/2">第00003个</router-link></li>
			<li><router-link to="/detail/3">第00004个</router-link></li>
			<li><router-link to="/detail/4">第00005个</router-link></li>
			<li><router-link to="/detail/5">第00006个</router-link></li>
			<li><router-link to="/detail/6">第00007个</router-link></li>
			<li><router-link to="/detail/7">第00008个</router-link></li>
			<li><router-link to="/detail/8">第00009个</router-link></li>
			<li><router-link to="/detail/9">第00010个</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	ul{
		width: 100%;
		
	}
	ul li{
		width: 100%;
		height: 32px;
		border-bottom: 1px solid #ccc;
		padding: 0px 10px;
		line-height: 32px;
		box-sizing: border-box;
	}
</style>