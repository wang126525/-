var url=require("url");
var read=require("./tool.js")
var querystring = require("querystring");
module.exports={
	"index":function(req,res){
		read.read(res,"./html/index.html")
	},
	"login":function(req,res){
		read.read(res,"./html/login.html");
		
//		get获取数据
		var str=url.parse(req.url).query;
		var obg=url.parse(req.url,true).query;
		if(str!=null){
			console.log("账号："+obg.zhuanghu);
			console.log("密码："+obg.mima)
		}else{
			console.log("aaaa")
		}
		
	},
	"register":function(req,res){
		read.read(res,"./html/register.html");
		
//		post
		var shu='';
		req.on("data",function(data){
			shu +=data
		});
		req.on("end",function(){
			if(shu==""){
				console.log("aaaa")
			}else{
				var h=querystring.parse(shu);
				console.log("密码"+h.mima);
				console.log("账户"+h.zhuanghu)
			}
		})
		
		
	},
	"other":function(req,res){
		res.write("400");
		res.end();
	}
}
