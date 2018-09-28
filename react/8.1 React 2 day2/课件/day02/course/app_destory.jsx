
var React = require("react");
var ReactDOM = require("react-dom");
var Banner = React.createClass({
	destoryCom(){
		ReactDOM.unmountComponentAtNode(document.getElementById("app"))	
	},
	render(){
		console.log("render")
		return (
			<div>
				<button onClick={this.destoryCom}>销毁此组件</button>
			</div>
		)
	},
	componentWillUnmount(){
		console.log("componentWillUnmount")
	}
})

ReactDOM.render(<div>
	<Banner />
</div>,document.getElementById("app"))
