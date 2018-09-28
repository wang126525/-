var fs=require("fs");
module.exports={
	
	"read":function(res,urlstr){
		fs.readFile(urlstr,"utf-8",(err,data)=>{
			if(err){
				console.log(err);
			}else{
				res.write(data);
				res.end();
			}
		})
	}
	
}
