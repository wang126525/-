<template>
	<div class="container">
		<header class="header">头部</header>
		<div id="content">
			<router-view></router-view>
			
		</div>
		<footer class="footer">
			<v-footer></v-footer>
		</footer>
	</div>
</template>

<script>
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

