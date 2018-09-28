/**
 * ref
 * 循环
 */
var React = require("react");
var ReactDOM = require("react-dom");


var Banner = React.createClass({
	render(){
		return (
			<div className="swiper-container">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						111111111
					</div>
					<div className="swiper-slide">2222222222</div>
					<div className="swiper-slide">33333333333</div>
					<div className="swiper-slide">444444444</div>
				</div>
				<div className = "swiper-pagination"></div>
			</div>
		)
	},
	componentDidMount(){
		var swiper = new Swiper(".swiper-container",{
			pagination:".swiper-pagination",
			autoplay:"3000"
		})
	}
})


ReactDOM.render(<Banner />,document.getElementById("app"));

