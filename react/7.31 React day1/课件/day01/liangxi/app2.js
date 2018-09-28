

require("./scss/main.scss")
var ChildCom = require("./child.js");
var React=require("react");
var ReactDom=require("react-dom");
var Listhead=React.createClass({
	getInitialState(){
		return{"data":[]} 
	},
	name(){
		var arr=this.state.data
//		console.log(arr)
			var name=this.refs.name.value;
			var password=this.refs.password.value;
			var obg={"name":name,"password":password}
			arr.push(obg)
			this.setState({"data":arr})
			
		},
	render:function(){
		
		return (
			<header>
				<input ref="name" type="text" placeholder="输入名字"/>
				<input ref="password" type="text" placeholder="输入学号"/>
				<button onClick={this.name}>添加</button>
				<ChildCom data={this.state.data}/>
			</header>
		)
	}
})

ReactDom.render(<Listhead />,document.getElementById("app"))
