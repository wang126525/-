//1。引入组件，用于路由对应的页面
import Home from "./../com/Home.vue";
import Kind from "./../com/Kind.vue";
import Cart from "./../com/Cart.vue";
import User from "./../com/User.vue";
import More from "./../com/More.vue";
import Detail from "./../com/Detail.vue";

import HomeHeader from "./../com/HomeHeader.vue";
import KindHeader from "./../com/KindHeader.vue";
import CartHeader from "./../com/CartHeader.vue";
import UserHeader from "./../com/UserHeader.vue";
import MoreHeader from "./../com/MoreHeader.vue";
import MainFooter from "./../com/MainFooter.vue";
import DetailFooter from "./../com/DetailFooter.vue";
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。

const routes = [
{path:"/",redirect:"/home"},
	{path:"/home",components:{
		default:Home,
		header:HomeHeader,
		footer:MainFooter
	}},
//	{
//		path:"/kind",
//		component:Kind,
//		children:[
//			{path:"cy",component:{
//				template:"<h2>衬衣</h2>"
//			}},
//			{path:"lf",component:{
//				template:"<h2>礼服</h2>"
//			}},
//			{path:"mf",component:{
//				template:"<h2>棉服</h2>"
//			}},
//			{path:"wt",component:{
//				template:"<h2>外套</h2>"
//			}}
//		/]
//	},
	{path:"/kind",redirect:"/kind/1"},
	{path:"/kind",components:{
		default:Kind,
		header:KindHeader,
		footer:MainFooter
	}},
	{path:"/kind/:classID",name:"kind",component:Kind},
	{path:"/cart",components:{
		default:Cart,
		header:CartHeader,
		footer:MainFooter
	}},
	{path:"/user",components:{
		default:User,
		header:UserHeader,
		footer:MainFooter
	}},
	{path:"/more",components:{
		default:More,
		header:MoreHeader,
		footer:MainFooter
	}},
	{path:"/detail/:goodsID",components:{
		default:Detail,
		footer:DetailFooter
	}}
];


export default routes;