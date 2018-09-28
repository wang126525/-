var http = require("http");
var Mock = require('mockjs');
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
var str = JSON.stringify(data, null, 4);
http.createServer(function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write(str);
	res.end();
}).listen(3000);

console.log("your server is running at http://loacalhost:3000");
