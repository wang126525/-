import MyAjax from "./MyAjax.js"
export default {
	loadHeader(){
		$("#header").load("views/register.html #registerHeader",function(){
			console.log("ok")
		})
	},
	loadContent(){
		$("#content").load("views/register.html #registerContent",function(){
				console.log("ok")
				$("#btn").on("tap",function(){
					//正则验证是否符合要求
					var userID = $("#userID").val();
					var password = $("#password").val();
					
					if(userID == "" || password == ""){
						alert("信息不完整")
					}else{
						
						
//						提交数据到服务器
						var userObj= {
							url:"http://datainfo.duapp.com/shopdata/userinfo.php",
							data:{
								status:"register",
								userID:userID,
								password:password
							},
							dataType:"JSON"
						}
						
						MyAjax.zeptoAjax(userObj,function(data){
							if(data == "0"){
								alert("用户名重名")
							}else if(data == "1"){
								alert("注册成功")
							}else{
								alert("注册失败")
							}
						})
					}
				})
			})
	}
};