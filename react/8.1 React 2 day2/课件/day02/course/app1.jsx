
var React = require("react");
var ReactDOM = require("react-dom");

var MyAjax = require("./MyAjax.js");
var Banner = React.createClass({
	getInitialState(){
		return {
			bannerList : []
		}
	},
	componentWillMount(){
		var that = this;
		var url = "http://datainfo.duapp.com/shopdata/getBanner.php";
		MyAjax.fetchJsonp(url,function(data){
			var arr = [];
			for(var item of data){
				arr.push(JSON.parse(item.goodsBenUrl)[0])
			}
			that.setState({
				bannerList:arr
			})
		},function(err){
			console.log(err)
			
		})
	},
	render(){
		var data = this.state.bannerList;
		var len = data.length;
		var arr = [];
		for(var i = 0; i < len; i++){
			arr.push(<div className="swiper-slide" key={i}>
						<img src = {data[i]} />
					</div>)
		}
		
		return (
			<div className="swiper-container">
				<div className="swiper-wrapper">
					{arr}
					{/*<div className="swiper-slide">
						111111111
					</div>
					<div className="swiper-slide">2222222222</div>
					<div className="swiper-slide">33333333333</div>
					<div className="swiper-slide">444444444</div>*/}
				</div>
				<div className = "swiper-pagination"></div>
			</div>
		)
	},
	componentDidMount(){
		
	},
	componentDidUpdate(){
		var swiper = new Swiper(".swiper-container",{
			pagination:".swiper-pagination",
			autoplay:"3000",
			loop:true,
			autoplayDisableOnInteraction:false
		})
	}
})

ReactDOM.render(<Banner />,document.getElementById("app"))
