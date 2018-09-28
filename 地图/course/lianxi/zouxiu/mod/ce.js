import "../scss/deng.scss";
import Ajax from "./ajsx.js";
import Mddeng from "./deng.js";
var Mdce={
	head:function(){
		$("#header").load("./html/ce.html #myhead",function(){
			console.log("ok");
			$("#header").find(".ce").on("tap",function(){
				Mddeng.head();
				Mddeng.content();
			})
		})
	},
	content:function(){
		$("#content").load("./html/ce.html #mycontent",function(){
			console.log("ok")
			
			$("#mycontent").find(".btn1").on("tap",function(){
				
				var classID=$("#mycontent").find(".userid").val();
				var password=$("#mycontent").find(".password").val();
				console.log(classID,password)
				if(classID==""||password==""){
					alert("请输入用户名或密码")
				}else{
					var obg={
						type:"get",
						url:" http://datainfo.duapp.com/shopdata/userinfo.php",
						dataType:"json",
						data:{
							"status":"register",
							"userID":classID,
							"password":password
						}
					}
					Ajax.ajax(obg,function(data){
						console.log(data)
						if(data==0){
							alert("用户名重名")
						}else if(data==2){
							alert("数据库出现错误")
						}else{
							alert("注册成功")
						}
						
					})
				}
			})
			
			
		})
	}
	
}

export default Mdce