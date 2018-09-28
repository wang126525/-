<template>
	<div class="container">
		<header class="header">
			<router-view name="header"></router-view>
		</header>
		<div id="content">
			<transition  
				name="custom-classes-transition"
			    enter-active-class="animated slideInRight"
			    leave-active-class="animated slideOutLeft">
				<router-view></router-view>
			</transition>
		</div>
		<footer class="footer" id="footer">
			<router-view name="footer"></router-view>
		</footer>
	</div>
</template>

<script>
	import "./../scss/animate.scss";
	import MainFooter from "./MainFooter.vue";
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			
		},
		components:{
			"v-footer":MainFooter
		}
		
	}
</script>

<style type="text/css">
	.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(300px);
  opacity: 0;
}
</style>
