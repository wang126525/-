import React from "react";
import ReactDOM from "react-dom";

import {createStore} from "redux";

/**
 * action 是一个对象，必要的一个属性为type,其余可以自己设定,
 * type
 * 	借书还是还书
 * val为自己设定，
 * 	如果添加，代表添加的值---借了几本书
 * 	如果删除，代表删除的索引值 --- 还几本书
 * 
 * 
 * reducer是一个纯函数----输入确定，输出一定确定
 * 	不能改写参数
 * 	不能调用系统I/O的API
 * 	不能使用不纯的函数 ---- 随机数
 *  不能改变state，必须返回全新的state --- 必须有返回值
 * 
 * 对象合并
 * 	http://blog.csdn.net/qq_30100043/article/details/53422657
 * 		object.assign()
 *	[...state,val]
 * 	concat
 * @param {Object} state
 */
var reducerStr = function(state = [],action = {}){
//	var type = action.type;
//	var val = action.val;
	var {type,val} = action;
	
	switch (type){
		case "ADD_ITEM":
			//val 添加的值
			return [...state,val];
			break;
		case "DELETE_ITEM":
			//val 索引值
			state.splice(val,1);
			return state;
			break;
		default:
			return state;
			break;
	}
}
var reducerObj = function(state = [],action = {}){
//	var type = action.type;
//	var val = action.val;
	var {type,val} = action;
	
	switch (type){
		case "ADD_ITEM_OBJ":
			return [...state,val];
			break;
		case "DELETE_ITEM_OBJ":
			//val 索引值
			state.splice(val,1);
			return state;
			break;
		default:
			return state;
			break;
	}
}

var reducer = function(state = [],action){
	return {
	    reducerStr: reducerStr(state.reducerStr, action),
	    reducerObj: reducerObj(state.reducerObj, action)
	  };
}
//创建图书馆，规定借书还书规则
var store = createStore(reducer);

class TodoApp extends React.Component{
	constructor(props){
		super(props);
//		this.state = {
//			list:[]
//		}
	}
	addTodoItem(){
//		var val = this.refs.userID.value;
//		var arr = this.state.list
//		arr.push(val);
//		this.setState({
//			list:arr
//		})
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
//		var arr = this.state.list
//		arr.splice(index,1);
//		this.setState({
//			list:arr
//		})
		store.dispatch({
			type:"DELETE_ITEM",
			val:index
		})
	}
	deleteTodoItemObj(index){
//		var arr = this.state.list
//		arr.splice(index,1);
//		this.setState({
//			list:arr
//		})
		store.dispatch({
			type:"DELETE_ITEM_OBJ",
			val:index
		})
	}
	render(){
		
//		var data = this.state.list;
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


function renderApp(){
	ReactDOM.render(<TodoApp />,document.getElementById("app"))
}
renderApp();
//如果借了书，书架上没有这本书，如果还了书，书架上多了一本书   ----- 加载DOM节点函数
store.subscribe(renderApp);
