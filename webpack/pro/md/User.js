import "./../scss/loginOrRegister.scss";
import Register from "./register.js";
import Login from "./Login.js"
export default {
	loadHeader(){
		$("#header").load("views/user.html #userHeader",function(){
			console.log("ok")
		})
	},
	loadContent(){
		$("#content").load("views/user.html #userContent",function(){
				console.log("ok")
				$("#loginBtn").on("tap",function(){
					Login.loadHeader();
					Login.loadContent();
				})
				$("#registerBtn").on("tap",function(){
					Register.loadHeader();
					Register.loadContent();
				})
			})
	}
};