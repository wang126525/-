
var React = require("react");
var Banner = require("./Banner.jsx");
var MyAjax = require("./MyAjax.js");
var MoreContent = React.createClass({
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
	render:function(){
		return (
			<div >
				更多
				<Banner data = {this.state.bannerList}/>
			</div>
		)
	}
})

module.exports = MoreContent;