
import "./scss/main.scss"
 import React from "react";
 import ReactDon from "react-dom";
 
 import App from "./md/App.js"
 import Footer from "./md/footer.js"
 import Content from "./md/content.js"
 import Contentkind from "./md/kind.js"
 import Contentcart from "./md/cart.js"
import Contentuser from "./md/user.js"
 import Contentmore from "./md/more.js"
 import {Router,Route,Link,hashHistory,IndexRoute} from "react-router"
 
ReactDon.render(
	(<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute  components={{footer:Footer,content:Content}}/>
			<Route path="home" components={{footer:Footer,content:Content}}/>
			<Route path="kind" components={{footer:Footer,content:Contentkind}}/>
			<Route path="cart" components={{footer:Footer,content:Contentcart}}/>
			<Route path="user" components={{footer:Footer,content:Contentuser}}/>
			<Route path="more" components={{footer:Footer,content:Contentmore}}/>
		</Route>
	</Router>)
	,document.getElementById("app"))
