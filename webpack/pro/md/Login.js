import MyAjax from "./MyAjax.js"
import Home from "./Home.js"
import Cart from "./Cart.js"
import MainFooter from "./MainFooter.js"
export default {
	loadHeader(){
		$("#header").load("views/login.html #loginHeader",function(){
			console.log("ok")
		})
	},
	loadContent(type){
		$("#content").load("views/login.html #loginContent",function(){
				console.log("ok")
				$("#btn").on("tap",function(){
					//正则验证是否否he要求
					var userID = $("#userID").val();
					var password = $("#password").val();
					
					if(userID == "" || password == ""){
						alert("信息不完整")
					}else{
						
						
//						提交数据到服务器
						var userObj= {
							url:"http://datainfo.duapp.com/shopdata/userinfo.php",
							data:{
								status:"login",
								userID:userID,
								password:password
							},
							dataType:"JSON"
						}
						
						MyAjax.zeptoAjax(userObj,function(data){
							if(data == "0"){
								alert("查无此人")
							}else if(data == "2"){
								alert("密码错误")
							}else{
//								alert("登录成功")
								//存储一个登录状态
								localStorage.setItem("isLogin","1");
								localStorage.setItem("userID",userID)
								/**
								 * 打哪来回哪去
								 */
								if(type == "home"){
									Home.loadHeader();
									Home.loadContent();
									//首页被选中
									MainFooter.loadFooterStyle(0)
									//底部出现
									$("#footer").css("display","block");
								}else if(type == "cart"){
									Cart.loadHeader();
									Cart.loadContent();
									MainFooter.loadFooterStyle(2)
									$("#footer").css("display","block");
								}
								
							}
						})
					}
				})
			})
	}
};