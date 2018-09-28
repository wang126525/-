
<template >
	<div>
		<!--{{tip}}头部111111-->
		<p class="active">
			组件内样式<v-button></v-button>
		</p>
	</div>
</template>

<script type="text/javascript">
/**
 * 单文件组件（**.vue）
 * 	<template>
 * 	<script>
 *	<style>
 * 
 * 	可以在定义组件的时候省略tempalte选项
 */

	import Button from "./Button.vue";
	var HomeHeader = {
//		template ----- 省略  ，因为为单文件组件
		data:function(){//自定义组件的初始化数据，必须为此格式
			return {
				tip:"首页"
			}
		},
		components:{
			"v-button":Button
		}
	}
	
	export default HomeHeader;
</script>
<style scoped>
	.active{
		color:#00f;
		font-size:30px;
	}
</style>