
import React from "react";
import ReactDOM from "react-dom";

class HelloWorld extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			num : 10
		};
//		this.clickHandler = this.clickHandler.bind(this);
		
	}
	
	clickHandler(index,b){
		console.log(index+"---"+b)
//		alert(this.state.num)	
	}
	
	render(){
		return (
			<div>
				<h1>helloworld----{this.state.num}</h1>
				<button onClick={this.clickHandler.bind(this,"0","1")}>点击事件测试</button>
			</div>
		)
	}
}

ReactDOM.render(<HelloWorld />,document.getElementById("app"))
