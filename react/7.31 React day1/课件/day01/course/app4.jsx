/**
 * 属性
 * 	如何使用
 * 		<HelloWorld name="test"/>
 * 		
 * 	输出
 * 		{this.props.name}
 * 
 * 父组件传值于子组件
 * 		调用子组件的地方 ，设置title属性，值自己设定parentTest
 * 				<ChildCom title="parentTest" />
 * 		子组件定义的地方，通过this.props.title获得值，可以直接显示
 * 
 */
var React = require("react");
var ReactDOM = require("react-dom");

var ChildCom  =  React.createClass({
	//虚拟的DOM
	render:function(){
		console.log("child",this.props)
		return (
			<div >
				我是子组件,父组件的值为:{this.props.course}---{this.props.a}
			</div>
		)
	}
})

var HelloWorld  =  React.createClass({
	//虚拟的DOM
	render:function(){
		console.log("parent",this.props)
		return (
			<div >
				<h1>您好,世界{this.props.title}</h1>
				<h2>helloworld---{this.props.name}</h2>
				<hr/>
				<ChildCom course="react" a="1" b="2"/>
			</div>
		)
	}
})

ReactDOM.render(<HelloWorld title = "parentTest" name="zz1703"/>,document.getElementById("app"));

