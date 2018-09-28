/**
 * ref
 * 循环
 */
var React = require("react");
var ReactDOM = require("react-dom");

//var todoItem = React.createClass({
//	render(){
//		return {
//			
//		}
//	}
//})

var TodoApp = React.createClass({
	getInitialState(){
		return {
			userList:[]
		}
	},
	saveData(){
		console.log(this.refs)
		console.log("username",this.refs.userName.value)
		console.log("password",this.refs.password.value)
		var obj = {
			username:this.refs.userName.value,
			password:this.refs.password.value
		}
		
		var arr = this.state.userList;
		arr.push(obj);
		this.setState({
			userList:arr
		})
	},
	deleteItem(event){
		var index = event.target.getAttribute("data-index");
		console.log(index);
		var arr = this.state.userList;
		arr.splice(index,1);
		this.setState({
			userList:arr
		})
	},
	render(){
		var that = this;
		var data = this.state.userList;
		var len = data.length;
		var arr = [];
		if(len > 0){
			for(var i = 0; i < len; i++){
				arr.push(<li key={i}>{data[i].username}------{data[i].password}---<button data-index={i} onClick={that.deleteItem}>删除</button></li>)
			}
		}
		
		
		return (
			<div>
				<input type="text" ref="userName"/>
				<input type="password" ref="password"/>
				<input type="button" value="添加" onClick={this.saveData}/>
				<hr/>
				用户列表为:
				<ul>
					{arr}
				</ul>
			</div>
		)
	}
})


ReactDOM.render(<TodoApp />,document.getElementById("app"));

