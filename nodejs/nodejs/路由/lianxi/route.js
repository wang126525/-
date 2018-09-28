var http=require("http");
var url=require("url");
var fs=require("fs")
http.createServer(function(req,res){
	
	var ur=req.url;
	if(ur!=="/favicon.ico"){
	var vur	=url.parse(ur).pathname.replace(/\//,"")
		
		res.writeHead(200,{"Cotent-Type":"text/html;charset=utf-8"});
		switch (vur){
			case "index":
			fs.readFile("./html/index.html","utf-8",(err,data)=>{
				
//				console.log(data)
				res.write(data);
				res.end();
			})
				
				break;
			case "login":
				fs.readFile("./html/login.html","utf-8",(err,data)=>{
					res.write(data);
					res.end();
				})
				break
			case "register":
				fs.readFile("./html/register.html","utf-8",(err,data)=>{
					res.write(data);
					res.end();
				})
				break
			default:
				break;
		}
		
		
	}
	
	
}).listen(2704);
console.log("your server is Running at http://localhost:2704")
