
import "../scss/list.scss"

import Ajax from "./ajsx.js"
import Mdkind from "./mdkind.js";
var mdlitap={
	head:function(zi){
		$("#header").load("./html/litap.html #litaphead",function(){
//			console.log("ok")
			$("#litaphead").find(".title").html(zi);
			$(".back").on("tap",function(){
//				console.log(111)
				Mdkind.head();
				Mdkind.content();	
				
				
			})
			
			
			
			
			
		})
	},
	content:function(kind){
		$("#content").load("./html/litap.html #litapcontent",function(){
			console.log(kind);
			var ob={
		    	url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",
		    	type:"JSONP",
		    	data:"{classID:"+kind+"}",
		    	
		    }
			Ajax.ajax(ob,function(resu){
//				console.log(resu);
				for (var i in resu) {
						var lis=$("<div class='lisul'></div>");
						$("#litapcontent").append(lis)
						$(lis).append(
					"<img src="+JSON.parse(resu[i].imgsUrl)[0]+
					" /><li><p>"+resu[i].goodsName+
					"</p><p><b>￥"+resu[i].price*(100-resu[i].discount)/100+
					"</b><span>￥"+resu[i].price+"</span></p><p>"+resu[i].discount+
					"折</p><img class=che number=1 userID="+resu[i].userID+" goodsID="+resu[i].goodsID+
					" src='../image/addCar2.jpg' /></li>")
					}
			})
			
			
		})
	}
}

export default mdlitap;