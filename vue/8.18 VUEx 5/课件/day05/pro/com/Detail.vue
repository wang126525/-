<template>
	<div >
		详情{{$route.params.goodsID}}
		<!--<button><router-link to="/home">返回</router-link></button>-->
		<button @click="back()">返回</button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		watch:{
			$route:function(new1,old1){
				console.log(new1 +"---"+old1)
			}
		},
		methods:{
			back(){
				window.history.go(-1);
				
			}
		},
		mounted(){
			console.log(this.$route)
			var goodsID = this.$route.params.goodsID;
		}
	}
</script>

<style >
	/*#footer{
		height: 0;
	}*/
</style>