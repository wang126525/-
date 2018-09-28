/**
 * package.json  webpack.config.js
 * cnpm i vue --save    cnpm i vue-loader --save
 * 配置文件
 * 	rules中添加
 * 		{
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        },
    取别名-----注意位置，与module同级
    	resolve: { 
   		alias: { 
   			'vue': 'vue/dist/vue.js' 
   		} 
   }
   
   创建一index.html文件个
 */

import Vue from "vue";

import "./scss/main.scss";

//引入自定义组件
import HomeHeader from "./md/HomeHeader.vue";

new Vue({
	el:"#app",
	data:{
		msg:"hello world"
	},
	components:{//注册组件，可以在index.html中使用   <v-header></v-header>
		"v-header":HomeHeader
	}
})


