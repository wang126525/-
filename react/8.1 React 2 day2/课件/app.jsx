
var React = require("react");
var ReactDOM = require("react-dom");
var TodoList = React.createClass({
	deleteItem(event){
		var index = event.target.getAttribute("data-index");
		this.props.delete(index);
	},
	render(){
		var data = this.props.data;
		var len = data.length;
		var arr = [];
		for(var i = 0; i < len; i++ ){
			arr.push(<li key={i}>{data[i]}<button data-index={i} onClick = {this.deleteItem}>删除</button></li>)
		}
		return (
			<ul>
				{arr}
			</ul>
		)
	}
})
var TodoAPP = React.createClass({
	getInitialState(){
		return {
			list : []
		}
	},
	deleteFn(index){
		var arr = this.state.list;
		arr.splice(index,1);
		this.setState({
			list:arr
		})
	},
	saveData(){
		var username = this.refs.username.value;
		var arr = this.state.list;
		arr.push(username)
		this.setState({
			list:arr
		})
	},
	render(){
		return (
			<div>
				<input type = "text" ref = "username" />
				<input type = "button" onClick={this.saveData} value = "添加"/>
				<hr/>
				<TodoList data = {this.state.list} delete = {this.deleteFn}/>
			</div>
		)
	}
})

ReactDOM.render(<TodoAPP />,document.getElementById("app"))
