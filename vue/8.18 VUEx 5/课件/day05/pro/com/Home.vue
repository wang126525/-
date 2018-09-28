<template>
	<div >
		<mt-swipe :auto="4000">
		  <mt-swipe-item>1</mt-swipe-item>
		  <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>
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
		<button @click = "goKind()">跳转到分类页面</button>
		<mt-datetime-picker
		    ref="picker"
		    type="datetime"
		    v-model="pickerValue">
		  </mt-datetime-picker>
		  {{pickerValue}}
		  <mt-actionsheet
  :actions="actions"
  v-model="sheetVisible">
  {{sheetVisible}}
</mt-actionsheet>
	</div>
</template>

<script>
	import router from "./../router/router.js";
	import Vue from 'vue';
	import { Toast } from 'mint-ui';
	import { Swipe, SwipeItem } from 'mint-ui';

	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	import { DatetimePicker } from 'mint-ui';

		Vue.component(DatetimePicker.name, DatetimePicker);
	import { Picker } from 'mint-ui';

Vue.component(Picker.name, Picker);
import { Actionsheet } from 'mint-ui';

Vue.component(Actionsheet.name, Actionsheet);
	export default {
		data(){
			return {
				pickerValue:"",
				sheetVisible:false,
				actions:[
					{name:"拍照",method:function(){
						console.log("拍照")
					}},
					{name:"选取",method:function(){
						console.log("选取")
					}},
				]
			}
		},methods:{
			goKind(){
				Toast('提示信息');
//				this.$refs.picker.open();
				this.sheetVisible = true;
//				router.push("kind");
//				router.replace("kind")
//				window.history.pushState("kind")
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
		height: 60px;
		border-bottom: 1px solid #ccc;
		padding: 0px 10px;
		line-height: 32px;
		box-sizing: border-box;
	}
	.mint-swipe{
		height: 100px;
	}
</style>