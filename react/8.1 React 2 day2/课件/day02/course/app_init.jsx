
var React = require("react");
var ReactDOM = require("react-dom");
var Banner = React.createClass({
	getDefaultProps(){
		console.log("getDefaultProps")
	},
	getInitialState(){
		console.log("getInitialState")
		return {
			bannerList : []
		}
	},
	componentWillMount(){
		console.log("componentWillMount")
	},
	render(){
		console.log("render")
		return (
			<div className="swiper-container">
				111111111111
			</div>
		)
	},
	componentDidMount(){
		console.log("componentDidMount")
	}
})

ReactDOM.render(<div>
	<Banner />
	<Banner />
</div>,document.getElementById("app"))
