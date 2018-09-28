/**
 * 状态
 * 		组件初始状态
 * 			getInitialState() -- react声明周期的一个钩子函数----本身自带的函数  ---- 定义初始值
 * 				必须有返回值   return null / obj   return {num:0}
 * 		使用状态
 * 			this.state.num
 * 		修改状态
 * 			this.setState({num:this.state.num++})
 * 	
 * 
 * 状态发生改变，会引起视图的二次渲染
 * 			如果调用函数changeCount。那么就会执行改变状态，改变状态之后，会自动执行函数render，检测到num值发生改变，所以重新渲染了组件
 */
var React = require("react");
var ReactDOM = require("react-dom");


var HelloWorld  =  React.createClass({
	getInitialState(){
		return {
			num:0
		};
	},
	changeCount(){
		console.log(this.state.num);
		var count = this.state.num - (-1);
		this.setState({
			num:count
		})
	},
	//虚拟的DOM
	render(){
		return (
			<div >
				<h1>您好,世界---{this.state.num}</h1>
				<button onClick={this.changeCount}>计数器</button>
				
			</div>
		)
	}
})

ReactDOM.render(<HelloWorld />,document.getElementById("app"));

