
import React from "react";
import ReactDOM from "react-dom";
import HomeContent from "./HomeContent.js";
import KindContent from "./KindContent.js";
import CartContent from "./CartContent.js";
import UserContent from "./UserContent.js";
import MoreContent from "./MoreContent.js";

import {Link} from "react-router";

class MainFooter extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			currentIndex:"0"
		}
	}
	
	render(){
		return (
			<ul>
				<li  ><a href="#/home">首页</a></li>
				<li  ><a href="#/kind">分类</a></li>
				<li  ><a href="#/cart">购物车</a></li>
				<li  ><a href="#/user">我的</a></li>
				<li  ><a href="#/more">更多</a></li>
			</ul>
		)
	}
}

export default MainFooter;