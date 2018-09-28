/**
 * jsx语法，react
 * 	1、引入必须的模块react、react-dom
 * 	2、创建虚拟dom，并且声明组件
 * 3、将虚拟的DOM添加到真实的页面中去
 */
//1、变量名必须为React和ReactDOM
var React = require("react");
var ReactDOM = require("react-dom");


//2、声明组件,React创建了一个类，在类中有一个方法render用来显示我们的HTML结构代码(return)
/**
 * 注意事项
 * 	1、组件名称首字母必须大写,小写表示的是原有的html标签，如果没有则不显示
 * 	2、组件调用时，采用标签的形式调用，也可以使用自闭合标签
 * 3、如果多个标签需要显示，必须使用一个共同的父标签进行包裹,否则（ Adjacent JSX elements must be wrapped in an enclosing tag），表示提示你一定要有公共的包裹标签
 * 4、renturn 如果需要，可以使用（）包裹html标签，一定不要使用{}
 */
var HelloWorld  =  React.createClass({
	//虚拟的DOM
	render:function(){
		return (
			<div >
				<h1>您好,世界</h1>
				<h2>helloworld</h2>
			</div>
		)
	}
})

//3、将虚拟dom真实化，ReactDOM有一个方法render,表示直接渲染为DOM
//有两个参数，第一个参数代表的是哪一个组件（哪一个虚拟DOM）并且用标签的形式进行调用<HelloWorld></HelloWorld>或者<HelloWorld />
//第二个参数代表的就是将节点放置在哪一个真实的节点中去document.getElementById("app")
//ReactDOM.render(<div>您好世界</div>,document.getElementById("app"));
//ReactDOM.render(<HelloWorld></HelloWorld>,document.getElementById("app"));
ReactDOM.render(<HelloWorld />,document.getElementById("app"));
