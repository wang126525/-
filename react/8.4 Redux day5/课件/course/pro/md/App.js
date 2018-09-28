import React from "react";
import store from "./../store/store.js";
class App extends React.Component{
	constructor(props){
		super(props);
	}
	addTodoItem(){
		store.dispatch({
			type:"ADD_ITEM",
			val:this.refs.userID.value
		})
		
	}
	addTodoItemObj(){
		store.dispatch({
			type:"ADD_ITEM_OBJ",
			val:{userID:this.refs.userID1.value,pwd:this.refs.pwd.value}
			
		})
	}
	deleteTodoItem(index){
		store.dispatch({
			type:"DELETE_ITEM",
			val:index
		})
	}
	deleteTodoItemObj(index){
		store.dispatch({
			type:"DELETE_ITEM_OBJ",
			val:index
		})
	}
	render(){
		
		var dataStr = store.getState().reducerStr;
		var dataObj = store.getState().reducerObj;
		var arr1 = [];
		var arr2 = [];
		for(var i in dataStr){
			arr1.push(<li key={i}>{dataStr[i]}<button onClick={this.deleteTodoItem.bind(this,i)}>删除</button></li>)
		}
		for(var i in dataObj){
			arr2.push(<li key={i}>{dataObj[i].userID}-----{dataObj[i].pwd}<button onClick={this.deleteTodoItemObj.bind(this,i)}>删除</button></li>)
		}
		return (
			<div>
				<input type = "text" ref="userID"/>
				<button onClick={this.addTodoItem.bind(this)}>添加</button>
				<ul>
					{arr1}
				</ul>
				<input type = "text" ref="userID1"/>
				<input type = "password" ref="pwd"/>
				<button onClick={this.addTodoItemObj.bind(this)}>添加</button>
				<ul>
					{arr2}
				</ul>
			</div>
		)
	}
}
export default App;