import React from "react";
import ReactDOM from "react-dom";

class Con extends React.Component{
	constructor(props){
		super(props)
		
//		console.log(prompt(("输入你想知道的事情")))
//		this.add=this.add.bind(this)
		this.state={
			num:10
		}
		
	}
	
	
	componentWillMount(){
		console.log("componentwillmount")
	}
	add(index){
//		console.log(this.state.num)
		console.log(index)
	}
	render(){
		return(
			<div>1222222
			
			
				<button onClick={this.add.bind(this,1)}>点击</button>
			</div>
		)
	}
	componentDidMount(){
		console.log("componentdidmount")
	}
}

ReactDOM.render(<Con />,document.getElementById("app"))
