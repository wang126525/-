import "../scss/deng.scss";
import Ajax from "./ajsx.js";
import Mdce from "./ce.js";
import Mdshow from "./mdshow.js"
var Mddeng={
	head:function(){
		$("#header").load("./html/deng.html #myhead",function(){
			console.log("ok")
			$("#header").find(".ce").on("tap",function(){
				Mdce.head();
				Mdce.content();
			})
			
			
			
		})
	},
	content:function(){
		$("#content").load("./html/deng.html #mycontent",function(){
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
						dataType:"JSON",
						data:{
							status:"login",
							userID:classID,
							password:password
						}
					}
					console.log(obg)
					Ajax.ajax(obg,function(data){
						console.log(data)
						if(data==0){
							alert("用户名不存在")
						}else if(data==2){
							alert("密码不正确")
						}else{
							localStorage.setItem('userID',classID);
							$("#mycontent").find(".userid").val("");
							$("#mycontent").find(".password").val("");
//							console.log(localStorage.getItem("userID"))
								Mdshow.head();
								Mdshow.content()
							var obg={
								type:"get",
								url:"http://datainfo.duapp.com/shopdata/getuser.php?callback=?",
								dataType:"JSONP",
								data:{
									userID:localStorage.getItem("userID")
								}
							}
							Ajax.ajax(obg,function(data){
//								console.log(data)
								Mdshow.head();
//								console.log(data[0].userID,data[0].userimg_url,"aaaaaaa")
								Mdshow.content(data[0].userID,data[0].userimg_url);
							})
							
							
						}
						
					})
				}
			})
			
			
		})
	}
	
}

export default Mddeng