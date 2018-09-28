

var React=require("react");
var Reactdom=require("react-dom");


var Zi=React.createClass({
	name(){
		var name=this.refs.name.value;
		var password=this.refs.password.value;
//		console.log(name,password)
		this.props.de(name,password)
	},
	render:function(){
		
		
		return (
		<div>
			<input ref="name" type="text"/>
			<input ref="password" type="password"/>
			<button onClick={this.name}>添加</button>
		</div>
		)
	}
})




var Text=React.createClass({
	getInitialState(){
		return {"arr":[]}
	},
	name1(str,str1){
		console.log(str,str1)
		var arr=this.state.arr;
		var obg={"name":str,'password':str1};
		arr.push(obg)
		this.setState({"arr":arr})
		console.log(obg)
		
	},
	del(eve){
		console.log(eve.target.getAttribute("data-s"))
		var arr=this.state.arr;
		arr.splice(eve.target.getAttribute("data-s"),1);
		this.setState({
			'arr':arr
		})
	},
	render:function(){
		var arr=this.state.arr
		console.log(arr);
		var arr1=[]
		for (var i=0;i<arr.length;i++) {
			arr1.push(<li key={i}><span>{arr[i].name}</span>&nbsp;&nbsp;&nbsp;&nbsp;{arr[i].password}<span data-s={i} onClick={this.del}>删除</span></li>)
		}
		return (
			<div>
				<Zi de={this.name1}/>
				<ul>
					{arr1}
				</ul>
			</div>
		)
	}
	
})

Reactdom.render(<Text name="1234"/>,document.getElementById("app"))
