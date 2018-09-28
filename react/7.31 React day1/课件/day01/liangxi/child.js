var React = require("react");

var ChildCom = React.createClass({
	delet(event){
		var shu=this.props.data
//		console.log(event.target.className)
		
		shu.splice(event.target.className,1);
		this.setState({
			data:shu
		})
	},
	render:function(){
		var shu=this.props.data
//		console.log(shu,"aaaa")
		var arr=[];
		for (var i=0;i<shu.length;i++) {
			arr.push(<li key={i} >姓名:{shu[i].name}------学号:{shu[i].password}<span className={i} onClick={this.delet} >删除</span></li>)
		}
		return (
			<div>
				
				<ul>
					{arr}
				</ul>
			</div>
		)
	}
})

module.exports = ChildCom;