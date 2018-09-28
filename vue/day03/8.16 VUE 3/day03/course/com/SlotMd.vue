<template>
	<div>
		这里是slot内容
		<slot name="test1">222222222</slot>
		这里是slot内容
		<slot name="test2">44444</slot>
		<h1 @click="getDom()" ref="dom">获取DOM元素</h1>
		<div ref = "oDiv">{{msg}}</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg:"获取值"
			}
		},
		methods:{
			getDom(){
				this.$refs.dom.style.color = "red";
				console.log(this.$refs.dom)
			}
		},
		mounted(){
			this.msg = "新的值";
			var that = this;
			this.$nextTick(function(){
				console.log(that.$refs.oDiv.textContent)
			})
		}
	}
</script>

<style>
</style>