import React from "react";
import ReactDOM from "react-dom";

import {createStore} from "redux";


class TodoApp extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			list:[]
		}
	}
	addTodoItem(){
		var val = this.refs.userID.value;
		var arr = this.state.list
		arr.push(val);
		this.setState({
			list:arr
		})
	}
	deleteTodoItem(index){
		var arr = this.state.list
		arr.splice(index,1);
		this.setState({
			list:arr
		})
	}
	render(){
		var data = this.state.list;
		var arr = [];
		for(var i in data){
			arr.push(<li key={i}>{data[i]}<button onClick={this.deleteTodoItem.bind(this,i)}>删除</button></li>)
		}
		return (
			<div>
				<input type = "text" ref="userID"/>
				<button onClick={this.addTodoItem.bind(this)}>添加</button>
				<ul>
					{arr}
				</ul>
			</div>
		)
	}
}


ReactDOM.render(<TodoApp />,document.getElementById("app"))
