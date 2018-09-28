<template>
	<div class="container">
		<header class="header">头部</header>
		<div id="content">
			<v-content ref="myContent" :my-msg = "msg" @to-parent = "getChildData"></v-content>
			{{childMsg}}
			<button @click="getChildFn">获取子组件的方法</button>
			
			<hr />
			<v-slot>
				<h1 slot="test1">11111</h1>
				<h1 slot="test2">3333</h1>
			</v-slot>
		</div>
		<footer class="footer">
			<v-footer></v-footer>
		</footer>
	</div>
</template>

<script>
	import MainFooter from "./MainFooter.vue";
	import Content from "./Content.vue";
	import SlotMd from "./SlotMd.vue";
	export default {
		data(){
			return {
				msg:"我是父组件的msg",
				childMsg:""
			}
		},
		methods:{
			getChildData(childData){
				this.childMsg = childData;
			},
			getChildFn(){
				this.$refs.myContent.run();
				console.log("test",this.$refs.myContent.test)
			},
			parentFn(){
				alert("我是父组件")
			}
		},
		components:{
			"v-footer":MainFooter,
			"v-content":Content,
			"v-slot":SlotMd
		}
		
	}
</script>

