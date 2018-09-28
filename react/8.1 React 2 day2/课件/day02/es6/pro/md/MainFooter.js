
import React from "react";
import ReactDOM from "react-dom";
import HomeContent from "./HomeContent.js";
import KindContent from "./KindContent.js";
import CartContent from "./CartContent.js";
import UserContent from "./UserContent.js";
import MoreContent from "./MoreContent.js";

class MainFooter extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			currentIndex:"0"
		}
	}
	
	
	changeIndex(index){
		this.setState({
			currentIndex:index
		})
		
		//改变头部和内容区域
		ReactDOM.unmountComponentAtNode(document.getElementById("content"))	
		
		switch (index){
			case　"0":
				ReactDOM.render(<HomeContent />,document.getElementById("content"));
				break;
			case　"1":
				ReactDOM.render(<KindContent />,document.getElementById("content"));
				break;
			case　"2":
				ReactDOM.render(<CartContent />,document.getElementById("content"));
				break;
			case　"3":
				ReactDOM.render(<UserContent />,document.getElementById("content"));
				break;
			case　"4":
				ReactDOM.render(<MoreContent />,document.getElementById("content"));
				break;
		}
	}
	
	render(){
		return (
			<ul>
				<li className={this.state.currentIndex=='0'?'active':''}  onClick = {this.changeIndex.bind(this,"0")}>首页</li>
				<li className={this.state.currentIndex=='1'?'active':''}  onClick = {this.changeIndex.bind(this,"1")}>分类</li>
				<li className={this.state.currentIndex=='2'?'active':''}  onClick = {this.changeIndex.bind(this,"2")}>购物车</li>
				<li className={this.state.currentIndex=='3'?'active':''}  onClick = {this.changeIndex.bind(this,"3")}>我的</li>
				<li className={this.state.currentIndex=='4'?'active':''}  onClick = {this.changeIndex.bind(this,"4")}>更多</li>
			</ul>
		)
	}
}

export default MainFooter;