// 使用 Mock
var Mock = require('mockjs');
var http = require("http");
//var Random = require("random")
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|5': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        "average|1-10": "★",
        "img":Mock.Random.image('200x100', '#894FC4', '#FFF', 'png', '!')
    }]
})

http.createServer((req,res) => {
	res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
	res.write(JSON.stringify(data));
	res.end()
}).listen(8000)
// 输出结果
console.log(JSON.stringify(data, null, 4))