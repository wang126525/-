var React = require("react");

var ChildCom = React.createClass({
	render:function(){
		return (
			<div>
				我是子组件,我现在是模块
			</div>
		)
	}
})

module.exports = ChildCom;