
import Mdshoufooter from "./mdshoufooter.js"
import "./../scss/dengcat.scss";
import Ajax from "./ajsx.js";
var Mddengcat={
	head:function(){
		$("#header").load("./html/dengcat.html #cathead",function(){
			console.log("ok")
		})
	},
	content:function(){
		$("#content").load("./html/dengcat.html #dengcatcontent",function(){
			var obg={
					type:"get",
					url:"http://datainfo.duapp.com/shopdata/getCar.php?callback=?",
					dataType:"JSONP",
					data:{
						userID:localStorage.getItem("userID")
						}
				};
				Ajax.ajax(obg,function(resu){
					console.log(resu);				
					for (var i in resu) {
							var lis=$("<div class='lisul'></div>");
							$("#dengcatcontent").append(lis)
							$(lis).append(
						"<img src="+resu[i].goodsListImg+
						" /><li><p>"+resu[i].goodsName+
						"</p><p><b>"+resu[i].className+
						"</b><span>单价:￥"+resu[i].price+
						"</span></p><div class=suan>数量:<span class=jia goodsID="+resu[i].goodsID+ " number="+resu[i].number+
						">+</span><input type=text value="+resu[i].number+
						"><span class=jian goodsID="+resu[i].goodsID+ " number="+resu[i].number+
						">-</span></div><div class='delate'>删除</div></li>")
						}
					
					$(".jia").on("tap",function(){
						console.log($(this).attr("goodsID"));
						
						var that=this
						var ob={
						    	url:"http://datainfo.duapp.com/shopdata/updatecar.php",
						    	type:"JSON",
						    	data:{
						    		userID:localStorage.getItem("userID"),
						    		goodsID:$(this).attr("goodsID"),
						    		number:Number($(this).parents(".suan").children("input").val())+1
						    	}
						    	
						   };
						   Ajax.ajax(ob,function(nul){
						   	console.log(nul,"1添加上商品");
						   $(that).parents(".suan").children("input").val(Number($(that).parents(".suan").children("input").val())+1)
						   console.log($(that).parents(".suan").children("input").val())
						   	
						   	
						   })
					});
				
					$(".jian").on("tap",function(){
						console.log($(this).attr("goodsID"));
						var that=this
						var ob={
						    	url:"http://datainfo.duapp.com/shopdata/updatecar.php",
						    	type:"JSON",
						    	data:{
						    		userID:localStorage.getItem("userID"),
						    		goodsID:$(this).attr("goodsID"),
						    		number:Number($(this).parents(".suan").children("input").val())-1
						    	}
						    	
						   };
						   Ajax.ajax(ob,function(nul){
						   	console.log(nul,"1添加上商品");
						   $(that).parents(".suan").children("input").val(Number($(that).parents(".suan").children("input").val())-1)
						   console.log($(that).parents(".suan").children("input").val())
						   	if($(that).parents(".suan").children("input").val()==0){
						   		$(that).parents(".lisul").css({
						   			display:"none"
						   		})
						   	}
						   	
						   })
					})
				
				
				
				
				
				
				
				
				
				})
			
		})
	}
}

export default Mddengcat