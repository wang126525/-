

import Vue from "vue"

import VueRouter from "vue-router"
Vue.use(VueRouter);

import "./scss/main.scss"

import App from "./md/App.vue";
import Home from "./md/home.vue";
import Kind from "./md/kind.vue";
import More from "./md/more.vue";
import User from "./md/user.vue";
import Cart from "./md/cart.vue";
import Detail from "./md/detail.vue";
const routes = [
    {path:"/home",component:Home},
    {path:"/kind",component:Kind},
    {path:"/more",component:More},
    {path:"/user",component:User},
    {path:"/cart",component:Cart},
    {path:"/detail/:index",name:'detail',component:Detail}
];

var router= new VueRouter({
    routes:routes
});





new Vue({
    
   el:"#app",
	router:router,
	data:{
		
	},
	methods:{
		
	},
	components:{
		"v-app":App
	}
	
	
		
    

})
