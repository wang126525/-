import Home from "./Home.js";
import Kind from "./Kind.js";
import Cart from "./Cart.js";
import User from "./User.js";
import More from "./More.js";
import Login from "./Login.js";
export default {
	loadFooterStyle(idx){
		$("#footer").find("li").eq(idx).addClass("active").siblings().removeClass("active");
	},
	loadFooter(){
		
		$("#footer").load("views/mainFooter.html",function(){
			$("#footer").find("li").on("tap",function(){
				var index = $(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				switch (index){
					case 0:
						Home.loadHeader();
						Home.loadContent();
						break;
					case 1:
						Kind.loadHeader();
						Kind.loadContent();
						break;
					case 2:
						if(localStorage.getItem("isLogin") == "1"){
							Cart.loadHeader();
							Cart.loadContent();
							
							
						}else{
							alert("请先登录")
							Login.loadHeader();
						    Login.loadContent("cart");
						    $("#footer").css("display","none");
						}
					
					
					
						
						break;
					case 3:
						User.loadHeader();
						User.loadContent();
						break;
					case 4:
						More.loadHeader();
						More.loadContent();
						break;
					default:
						break;
				}
			})
		})
	}
}
