
var React = require("react");

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