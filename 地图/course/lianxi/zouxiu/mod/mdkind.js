import Ajax from "./ajsx.js";
import "../scss/kind.scss";
import Mdlitap from "./mdlitap.js";
var Mdkind={
	head:function(){
		$("#header").load("./html/kind.html #kindhead",function(){
			console.log("ok")
			
		})
	},
	content:function(){
		$("#content").load("./html/kind.html #kindcontent",function(){
//			console.log("列表")
			
			 var ob={
		    	url:"http://datainfo.duapp.com/shopdata/getclass.php",
		    	type:"JSON",
		    	data:""	
		  		 };
			Ajax.ajax(ob,function(resu){
				var resu=JSON.parse(resu)
//				console.log(resu);
				for(var i in resu){
					$(".kindul").append("<li classID="+resu[i].classID+">"+resu[i].className+"</li>")
				};
				
				$(".kindul li").on("tap",function(){
//					console.log($(this).attr("classID"));
					var kind=$(this).attr("classID")
//					console.log($(this).html())
					Mdlitap.head($(this).html());
					Mdlitap.content(kind);	
					
				})
				
				
			})
			
			
		})
	}
}

export default Mdkind