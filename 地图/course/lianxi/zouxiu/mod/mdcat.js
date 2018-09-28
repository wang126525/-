import Mdshou from "./mdshou.js"
import Mdshoufooter from "./mdshoufooter.js"
import "./../scss/cat.scss"
var Mdcat={
	head:function(){
		$("#header").load("./html/cat.html #cathead",function(){
			console.log("ok")
		})
	},
	content:function(){
		$("#content").load("./html/cat.html #catcontent",function(){
			console.log("ok")
			$(".guang").on("tap",function(){
				Mdshou.head();
				Mdshou.content();
				$("#footer").find('li').eq(0).addClass("active").siblings().removeClass("active")
			})
		})
	}
}

export default Mdcat