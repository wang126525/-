<template>
	<div>
		我是内容区域，{{myMsg}}
		<button @click="send()">发送</button>
		
		<hr />
		<button @click = "type='aaa'">显示A组件</button>
		<button @click = "type='bbb'">显示B组件</button>
		<component :is="type"></component>
		<hr />
		<button @click="getParentData()">调用父组件的方法</button>
	</div>
</template>

<script>
	export default {
		props:["myMsg"],//取得父级属性msg的值，相当于在此组件data中定义了一个msg，将值赋值给msg
		data(){
			return {
				test:"我是子组件，我发送数据给父组件",
				type:"aaa"
			}
		},
		methods:{
			send(){
				this.$emit("to-parent",this.test)
			},
			run(){
				console.log("通过ref获取到子组件的方法");
			},
			getParentData(){
				this.$parent.parentFn();
				alert(this.$parent.msg)
			}
		},
		components:{
			"aaa":{
				template:"<h1>我是A组件</h1>"
			},
			"bbb":{
				template:"<h1>我是B组件</h1>"
			}
		}
	}
</script>

<style>
</style>