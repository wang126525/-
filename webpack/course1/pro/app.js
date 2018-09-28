

import "./scss/main.scss";

import Home from "./md/Home.js";
import Kind from "./md/Kind.js";
$("#footer").find("li").on("tap",function(){
	var index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	switch (index){
		case 0:
			console.log("首页");
//			$("#content").html("首页")
			Home.loadHeader();
			Home.loadContent();
			
			break;
		case 1:
			console.log("分类")
//			$("#content").html("分类")
//			$("#header").load("views/kind.html #kindHeader",function(){
//				console.log("ok")
//			})
//			$("#content").load("views/kind.html #kindContent",function(){
//				console.log("ok")
//			})
			Kind.loadHeader();
			Kind.loadContent();
			break;
		case 2:
			console.log("购物车")
			$("#content").html("购物车")
			break;
		case 3:
			console.log("我的秀")
			$("#content").html("我的秀")
			break;
		case 4:
			console.log("更多")
			$("#content").html("更多")
			break;
		default:
			break;
	}
})
