<template>
	<ul>
		<li :class="activeIndex == 0 ? 'active' : ''" @click = "changeIndex(0)">首页</li>
		<li :class="activeIndex == 1 ? 'active' : ''" @click = "changeIndex(1)">分类</li>
		<li :class="activeIndex == 2 ? 'active' : ''" @click = "changeIndex(2)">购物车</li>
		<li :class="activeIndex == 3 ? 'active' : ''" @click = "changeIndex(3)">我的</li>
		<li :class="activeIndex == 4 ? 'active' : ''" @click = "changeIndex(4)">更多</li>
	</ul>
</template>

<script>
	export default {
		data(){
			return {
				activeIndex:0
			}
		},
		methods:{
			changeIndex(index){
				console.log(index)
				this.activeIndex = index;
			}
		}
	}
</script>

<style>
</style>