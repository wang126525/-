import MyAjax from "./MyAjax.js"
export default {
	loadHeader(){
		$("#header").load("views/cart.html #cartHeader",function(){
			console.log("ok")
		})
	},
	loadContent(){
		$("#content").load("views/cart.html #cartContent",function(){
				console.log("ok")
				
				var userID = localStorage.getItem("userID");
				var obj = {
					url:"http://datainfo.duapp.com/shopdata/getCar.php?callback=",
					data:{
						userID:userID,
					},
					dataType:"JSONP"
				}
				MyAjax.zeptoAjax(obj,function(data){
					if(data == "0"){
						alert("没有产品")
					}else{
						console.log("cart",data)
					}
				})
			})
	}
};