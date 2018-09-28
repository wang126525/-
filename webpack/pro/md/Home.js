import "./../scss/home.scss";//单独scss文件
import "./../scss/proList.scss";//列表多处使用，将css做了分离
import MyAjax from "./MyAjax.js";//ajax模块----回调函数的应用
import Search from "./Search.js";//搜索模块
import Login from "./Login.js";//如果需要加入购物车，没有登录的时候需要登录
export default {
	loadHeader(){
		$("#header").load("views/home.html #homeHeader",function(){
			console.log("ok")
		})
	},
	loadContent(){
		$("#content").load("views/home.html #homeContent",function(){
				console.log("ok")
			//去搜索
			$("#goSearch").on("tap",function(){
				Search.loadHeader();
				Search.loadContent();
				$("#footer").css("display","none");//取消底部
			})
			//静态轮播图  --- 如果遇到ajax请求，则必须注意将其放在请求完毕后
//			var mySwiper = new Swiper("#homeBanner",{
//				pagination:".swiper-pagination",
//				autoplay:3000,
//				loop:true,
//				autoplayDisableOnInteraction:false
//			})
			
			//请求AJAX---首页轮播
			var bannerData = {
				url:"http://datainfo.duapp.com/shopdata/getBanner.php?callback=",
				data:"",
				dataType:"JSONP"
			}
			//ajax请求的动画
			$("#homeWrapper").html("<img src='../image/loading.gif' style='width:30px;height:30px'/>");
			MyAjax.zeptoAjax(bannerData,function(data){
				//去掉动画
				$("#homeWrapper").html("");
				//eval可以去掉括号
				var result = eval(data)
//				console.log(result);
				
				var arr = [];//用来放置最后的轮播图
				for(var item of result){
//					console.log(JSON.parse(item.goodsBenUrl)[0])
					arr.push(JSON.parse(item.goodsBenUrl)[0])
				}
				console.log(arr)
				//实现渲染的数据
				for(var i in arr){
					$("#homeWrapper").append('<div class="swiper-slide">'+
						'<img src="'+arr[i]+'"/>'+
					'</div>')
				}
				//ajax请求之后实例化swiper对象
				var mySwiper = new Swiper("#homeBanner",{
					pagination:".swiper-pagination",
					autoplay:3000,
					loop:true,
					autoplayDisableOnInteraction:false
				})
			})
			
			
			//请求列表数据
			var listData = {
				url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
				data:"",
				dataType:"JSONP"
			}
			$("#proList").html("<img src='../image/loading.gif' style='width:30px;height:30px'/>");
			MyAjax.zeptoAjax(listData,function(data){
//				console.log(data)
				$("#proList").html("");
				var result = eval(data);
				/**
				 * 如果需要获取一个对象中的某一个字段，通常可以使用自定义属性的方式
				 * goodsID="'+item.goodsID+'"
				 * 		$(this).attr("goodsID")
				 * 如果需要点击列表，跳转到详情页面，那么可以在li上添加一个自定义属性
				 * 		获取到自定义属性
				 * 			var goodsID = $(this).attr("goodsID")
				 * 			Detail.loadContent(goodsID)
				 * 	在Detail.js中的loadContent方法中
				 * 		loadContent(goodsID){
				 * 			$.ajax({
				 * 			url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback="
				 * 			data:{
				 * 				goodsID:goodsID
				 *			 },
						 * dataType:"jsonp",
						 * 
						 * })
				 * }
				 */
				for(var item of result){
					$("#proList").append('<li >'+
						'<div class="proImg">'+
							'<img src="'+item.goodsListImg+'"/>'+
						'</div>'+
						'<div class="proInfo">'+
							'<p class="proTitle">'+
								item.goodsName+
							'</p>'+
							'<p class="proPrice">'+
								'￥ '+item.price+
							'</p>'+
							'<p class="proDiscount">'+
								item.discount+'折'+
							'</p>'+
							'<button class="addCart" goodsID="'+item.goodsID+'">加入购物车</button>'+
						'</div>'+
					'</li>')
				}
				
				/**
				 *点击加入购物车，判断用户有没有登录localStorage.getItem("isLogin") == "1"
				 * 	如果登录
				 * 		调用加入购物车的接口
				 *  如果没有 ---  能用参数解决的问题都不是问题---最多3个参数
				 * 		跳转到登录界面-----一定要告诉登录从哪里来的，方便登录之后跳转会原页面
				 * 		 Login.loadContent("home");
				 * 		登录页面要求取消页面的底部
				 * 		 $("#footer").css("display","none");
				 */
				$(".addCart").on("tap",function(){
					if(localStorage.getItem("isLogin") == "1"){
						alert("可以加入购物车")
						var goodsID = $(this).attr("goodsID");
						var userID = localStorage.getItem("userID");
						var obj = {
							url:"http://datainfo.duapp.com/shopdata/updatecar.php",
							data:{
								userID:userID,
								goodsID:goodsID,
								number:1
							},
							dataType:"JSON"
						}
						MyAjax.zeptoAjax(obj,function(data){
							if(data == "1"){
								alert("更新成功")
							}else{
								alert("gg")
							}
						})
						
					}else{
						alert("请先登录")
						Login.loadHeader();
					    Login.loadContent("home");
					    $("#footer").css("display","none");
					}
				})
			})
		})
	}
};