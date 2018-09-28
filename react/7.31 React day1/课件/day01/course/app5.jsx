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
 * 子组件給父组件传值
 * 		子组件通过某一个事件进行触发onClick={this.sendData}
 * 			<button onClick={this.sendData}>传值給父组件</button>
 * 			子组件定义一个方法sendData()
 * 		父组件设置一个属性 test = {this.testFn} 
 * 				testFn为父组件的一个函数
 * 					testFn(str){
						console.log(str);
					},
			子组件内部就可以使用this.props.test("1111")，就相当于直接访问了父组件的方法testFn("1111")
 * 				
 */
var React = require("react");
var ReactDOM = require("react-dom");

var ChildCom  =  React.createClass({
	sendData(){
		this.props.test("传值給了父组件")
	},
	//虚拟的DOM
	render(){
		console.log("child",this.props)
		return (
			<div >
				我是子组件
				<button onClick={this.sendData}>传值給父组件</button>
			</div>
		)
	}
})

var HelloWorld  =  React.createClass({
	testFn(str){
		console.log(str);
	},
	//虚拟的DOM
	render(){
		console.log("parent",this.props)
		return (
			<div >
				<h1>您好,世界</h1>
				<hr/>
				<ChildCom test = {this.testFn}/>
			</div>
		)
	}
})

ReactDOM.render(<HelloWorld />,document.getElementById("app"));

