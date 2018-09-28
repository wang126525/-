
var React = require("react");

var ReactDOM = require("react-dom");
var HomeContent = require("./HomeContent.jsx");
var KindContent = require("./KindContent.jsx");
var CartContent = require("./CartContent.jsx");
var UserContent = require("./UserContent.jsx");
var MoreContent = require("./MoreContent.jsx");

var MainFooter = React.createClass({
	getInitialState(){
		return {
			currentIndex : 0
		}
	},
	changeIndex:function(event){
		console.log(event.target.getAttribute("data-index"));
		var dataIndex = event.target.getAttribute("data-index");
		this.setState({
			currentIndex:dataIndex
		})
		//改变头部和内容区域
		ReactDOM.unmountComponentAtNode(document.getElementById("content"))	
		
		switch (dataIndex){
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
	},
	render:function(){
		return (
			<ul>
				<li className={this.state.currentIndex=='0'?'active':''} data-index="0" onClick = {this.changeIndex}>首页</li>
				<li className={this.state.currentIndex=='1'?'active':''} data-index="1" onClick = {this.changeIndex}>分类</li>
				<li className={this.state.currentIndex=='2'?'active':''} data-index="2" onClick = {this.changeIndex}>购物车</li>
				<li className={this.state.currentIndex=='3'?'active':''} data-index="3" onClick = {this.changeIndex}>我的</li>
				<li className={this.state.currentIndex=='4'?'active':''} data-index="4" onClick = {this.changeIndex}>更多</li>
			</ul>
		)
	}
})

module.exports = MainFooter;