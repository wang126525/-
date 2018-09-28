var http=require("http");
var url=require("url")
var rou=require("./rou.js")
http.createServer((req,res)=>{
	
	
	
	res.writeHead(200,{"Cotent-Type":"text/html;charset=utf-8"});
	if(req.url!="/favicon.ico"){
		
		var pathname=url.parse(req.url).pathname.replace(/\//,"");
		console.log(pathname);
//		res.write("wo");
//		res.end();

		try{
			rou[pathname](req,res)
		}catch(e){
			//TODO handle the exception
			rou["other"](req,res)
		}

	}
	
	
	
	
	
	
}).listen(3000);
console.log("http:/localhost:3000")
