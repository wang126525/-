import "../scss/search.scss"
import Ajax from "./ajsx.js"
import Mdshou from "./mdshou.js"
export default {
	head:function(){
		$("#header").load("./html/search.html #searchhead",function(){
//			console.log("ok")
//			返回首页
			$(".back").on("tap",function(){
//				console.log(111)
				Mdshou.head();
				Mdshou.content();
				$("#footer").attr({
				style:""
			})
			})
		})
	},
	content:function(){
		$("#content").load("./html/search.html #sou",function(){
			console.log("ok")
		})
	}
}
