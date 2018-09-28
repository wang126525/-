
import "../scss/list.scss"

import Ajax from "./ajsx.js"
import Mdsearch from "./mdsearch.js";
import Mddeng from "./deng.js"
var Mdshou={
	head:function(){
		$("#header").load("./html/shouye.html #shouyehead",function(){
//			console.log("ok")
		})
	},
	content:function(){
		$("#content").load("./html/shouye.html #shouyecontent",function(){
//			console.log("ok")
			
		    
		    var ob={
		    	url:"http://datainfo.duapp.com/shopdata/getBanner.php?callback=?",
		    	type:"JSONP",
		    	data:""
		    	
		    }
//			banner
			Ajax.ajax(ob,function(resu){
//				console.log(resu);
				for(var itm of resu){
					var itmurl=itm.goodsBenUrl.split(",")[0].replace("[","");
//					console.log(itmurl);
					$("#banner").append("<div class='swiper-slide'><img src="+itmurl+"/></div>")
				}
				var swiper = new Swiper('#swiper-container', {
			        pagination: '.swiper-pagination',
			        autoplayDisableOnInteraction: false,
			        autoplay:2000,
					loop:true
			    });
			});
			
////			列表
			var ob={
		    	url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",
		    	type:"JSONP",
		    	data:"",
		    	
		    }
			Ajax.ajax(ob,function(resu){
//					console.log(resu);
					for (var i in resu) {
						var lis=$("<div class='lisul'></div>");
						$("#shouyecontent").append(lis)
						$(lis).append(
					"<img src="+JSON.parse(resu[i].imgsUrl)[0]+
					" /><li><p>"+resu[i].goodsName+
					"</p><p><b>￥"+resu[i].price*(100-resu[i].discount)/100+
					"</b><span>￥"+resu[i].price+"</span></p><p>"+resu[i].discount+
					"折</p><img class=che number=1 userID="+resu[i].userID+" goodsID="+resu[i].goodsID+
					" src='../image/addCar2.jpg' /></li>")
					}
					
					
					
					$(".lisul").find(".che").on("tap",function(){
						if(localStorage.getItem("userID")){
							console.log($(this).attr("goodsID"));
							var ob={
							    	url:"http://datainfo.duapp.com/shopdata/updatecar.php",
							    	type:"JSON",
							    	data:{
							    		userID:localStorage.getItem("userID"),
							    		goodsID:$(this).attr("goodsID"),
							    		number:1
							    	}
							    	
							   };
							   Ajax.ajax(ob,function(nul){
							   	console.log(nul,"1添加上商品");
							   })
						}else{
							console.log("请登录")
							Mddeng.head();
							Mddeng.content()
							$("#footer").find('li').eq(3).addClass("active").siblings().removeClass("active")
							
						}
						
						   
						   
						   
						   
					})
					


//滚动加载
					var a=0;
					$("#content").on("scroll",function(){
						
						var scro=$(this).scrollTop();
//						console.log(scro,"aaa")
						
						var ob={
					    	url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",
					    	type:"JSONP",
					    	data:"pageCode:"+a,
					    	
					    }
						if(scro>=720+a*1010){
							a++						
							Ajax.ajax(ob,function(resu){
								for (var i in resu) {
									var lis=$("<div class='lisul'></div>");
									$("#shouyecontent").append(lis)
									$(lis).append(
									"<img src="+JSON.parse(resu[i].imgsUrl)[0]+
									" /><li><p>"+resu[i].goodsName+
									"</p><p><b>￥"+resu[i].price*(100-resu[i].discount)/100+
									"</b><span>￥"+resu[i].price+"</span></p><p>"+resu[i].discount+
									"折</p><img class=che number=1 userID="+resu[i].userID+" goodsID="+resu[i].goodsID+
									" src='../image/addCar2.jpg' /></li>")
								}
								
							})
							
							
							
							
						}
						
						
					})
					
			});
			
			
			
			
//			搜索框
		$(".searchbox").on("tap",function(){
			console.log(1);
			Mdsearch.head();
			Mdsearch.content();
			$("#footer").attr({
				style:"display:none"
			})
		})
			
			
		})
	}
}

export default Mdshou