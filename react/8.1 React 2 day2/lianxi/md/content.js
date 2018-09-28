


import React from "react";
import Ajax from "./../MyAjax.js"
export default class Content extends React.Component{
	constructor(props){
		super(props)
		this.state={
			banner:[]
		}
	}
	componentWillMount(){
		var arr=[]
		var that=this
		 var url="http://w.lefeng.com/api/neptune/brand/ad/v3?zoneId=943%2C478%2C496%2C693%2C724%2C725%2C726%2C727%2C728&resolution=320x568&appName=lefeng_android&version=4.1.1"
		Ajax.fetch(url,function(data){
			console.log(data.data["478"])
			for(var i of data.data["478"]){
				arr.push(i.imgFullPath)
			}
			that.setState({
				banner:arr
			})
			
		},function(err){console.log(err)})
	}
	render(){
		var arr1=this.state.banner;
		var arr=[]
		for(var it in arr1){
			arr.push(<div key={it} className="swiper-slide"><img src={arr1[it]}/></div>)
		}
		return (
			
			<div className="type">
				<hender id="hender">home头部</hender>
          		<div id="content">
          			<div className="swiper-container" id="banner">
				        <div className="swiper-wrapper">
				          {arr}
				        </div>
				      
				        <div className="swiper-pagination"></div>
				    </div>
          		
          		
          		</div>
			</div>
		)
	}
	componentDidUpdate(){
		 var swiper = new Swiper('#banner', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        loop:true,
		        autoplay:3000,
		        autoplayDisableOnInteraction:false
		    });
	}
}
