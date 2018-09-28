/**
 * 属性
 * 	如何使用
 * 		<HelloWorld name="test"/>
 * 		
 * 	输出
 * 		{this.props.name}
 * 
 * 父组件传值于子组件
 * 		调用子组件的地方 ，设置name属性，值自己设定parentTest
 * 				<ChildCom title="parentTest" />
 * 		子组件定义的地方，通过this.props.title获得值，可以直接显示
 * 
 */
var React = require("react");
var ReactDOM = require("react-dom");

var ChildCom = React.createClass({
	clickHandler:function(){
		this.props.test("111111111111111111111")
	},
	//虚拟的DOM
	render:function(){
		return (
			<div >
				我是子组件,父组件的值为{this.props.title}
				<button onClick={this.clickHandler}>传值給父组件</button>
			</div>
		)
	}
})

var HelloWorld  =  React.createClass({
	testFn:function(str){
		console.log(str)
	},
	//虚拟的DOM
	render:function(){
		return (
			<div >
				<h1>您好,世界{this.props.name}</h1>
				<h2>helloworld</h2>
				<hr/>
				<ChildCom title="parentTest" test = {this.testFn}/>
			</div>
		)
	}
})

ReactDOM.render(<HelloWorld name="test"/>,document.getElementById("app"));

