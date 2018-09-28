import Home from "./Home.js";
import MainFooter from "./MainFooter.js";
export default {
	loadHeader(){
		$("#header").load("views/search.html #searchHeader",function(){
			console.log("ok")
			
			$("#back").on("tap",function(){
				$("#footer").css("display","block");
				Home.loadHeader();
				Home.loadContent();
				MainFooter.loadFooter();
			})
		})
	},
	loadContent(){
		$("#content").load("views/search.html #searchContent",function(){
				console.log("ok")
			})
	},
	loadFooter(){
		$("#footer").load("views/search.html #searchFooter",function(){
				console.log("ok")
			})
	}
};