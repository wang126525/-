import "../scss/show.scss";
import Mddeng from "./deng.js";
var Mdshow={
	head:function(){
		$("#header").load("./html/show.html #myhead",function(){
			console.log("ok")
		})
	},
	content:function(name,img){
		$("#content").load("./html/show.html .mycontent",function(){
			console.log("ok")
			$(".name").html(name);
			$(".nameimg").attr({
				src:img
			})
			$(".mycontent").find("#zhuxiao").on("tap",function(){
				localStorage.removeItem("userID");
				Mddeng.head();
				Mddeng.content()
				
			})
			
			
			
			
			
		})
	}
	
}

export default Mdshow