//1。引入组件，用于路由对应的页面
import Home from "./../com/Home.vue";
import Kind from "./../com/Kind.vue";
import Cart from "./../com/Cart.vue";
import User from "./../com/User.vue";
import More from "./../com/More.vue";
import Detail from "./../com/Detail.vue";
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。

const routes = [
	{path:"/home",component:Home},
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
//		]
//	},
	{path:"/kind",component:Kind},
	{path:"/kind/:classID",name:"kind",component:Kind},
	{path:"/cart",component:Cart},
	{path:"/user",component:User},
	{path:"/more",component:More},
	{path:"/detail/:goodsID",component:Detail}
];


export default routes;