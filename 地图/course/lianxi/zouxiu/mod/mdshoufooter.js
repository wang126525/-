import Mdshou from "./mdshou.js"
import Mdkind from "./mdkind.js"
import Mdcat from "./mdcat.js"
import Mddengcat from "./dengcat.js"
import Mdshow from "./mdshow.js"
import Mdmore from "./mdmore.js"
import Mdshoufooter from "./mdshoufooter.js"
import Mddeng from "./deng.js"
import Ajax from "./ajsx.js";
export default {
	footer:function(){
		$("#footer").load("../html/shouyefooter.html #shoufooter",function(){
			
			$("#footer").find('li').on('tap',function(){
//				console.log($(this).index());
				$(this).addClass("active").siblings().removeClass("active");
				$("#content").html("")
				switch ($(this).index()){
					case 0:
					
						Mdshou.head();
						Mdshou.content();
						Mdshoufooter.footer();
						break;
					case 1:
						Mdkind.head();
						Mdkind.content()
						break;
					case 2:
						if(localStorage.getItem("userID")){
							console.log("已经登录过啦")
							Mddengcat.head();
							Mddengcat.content()
						}else{
							Mdcat.head();
							Mdcat.content()
						}
						
						break;
					case 3:
//					console.log(localStorage.getItem("userID"))
						if(localStorage.getItem("userID")){
							
							var obg={
								type:"get",
								url:"http://datainfo.duapp.com/shopdata/getuser.php?callback=?",
								dataType:"JSONP",
								data:{
									userID:localStorage.getItem("userID")
								}
							}
							Ajax.ajax(obg,function(data){
//								console.log(data[0].userimg_url)
								Mdshow.head();
								Mdshow.content(data[0].userID,data[0].userimg_url);
								
							})
						}else{
							
							Mddeng.head();
							Mddeng.content()
						}

						break;
					case 4:
						Mdmore.head();
						Mdmore.content()
						break;
					default:
						break;
		
			
			
				}
			})

		})
	}


}
