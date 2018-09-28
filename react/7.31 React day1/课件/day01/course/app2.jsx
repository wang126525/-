var React = require("react");
var ReactDOM  = require("react-dom");

var ChildCom = require("./ChildCom.jsx");

var ParentCom = React.createClass({
	render:function(){
		return (
			<div>
				我是父组件,横线以下是子组件
				<hr/>
				<ChildCom></ChildCom>
			</div>
		)
	}
})

ReactDOM.render(<ParentCom></ParentCom>,document.getElementById("app"));
