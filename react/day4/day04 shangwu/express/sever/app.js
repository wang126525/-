//引入express
//var express = require("express");
//生成实例
//var app = express();
var app = require("express")();
var https = require("https");

var md = require("./md.js");
//设定路由
app.get("/",(req,res) => {
	res.send("hello world");
})
//结局跨域
app.get("*",(req,res,next) => {
	res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
//饿了么接口
var eleoption = {
  hostname: 'mainsite-restapi.ele.me',
  port: 443,//如果是https协议均为443，如果为http协议，此值为80
  path: '/shopping/v2/entries?latitude=34.774199&longitude=113.6695957&templates[]=main_template',
  method: 'GET'
};
//豆瓣TOP250
var dboption = {
  hostname: 'api.douban.com',
  port: 443,//如果是https协议均为443，如果为http协议，此值为80
  path: '/v2/movie/top250',
  method: 'GET'
};
//豆瓣电影热映
var dbhotoption = {
  hostname: 'api.douban.com',
  port: 443,//如果是https协议均为443，如果为http协议，此值为80
  path: '/v2/movie/in_theaters',
  method: 'GET'
};
//http://h5.jumei.com/index/requestDelegate?url=http%3A%2F%2Fmobile.jumei.com%2Fmsapi%2Fmall%2Fallcategories.json
var hotoption1 = {
  hostname: 'h5.jumei.com',
  port: 80,//如果是https协议均为443，如果为http协议，此值为80
  path: 'index/requestDelegate?url=http%3A%2F%2Fmobile.jumei.com%2Fmsapi%2Fmall%2Fallcategories.json',
  method: 'GET'
};
app.get("/elelist",(req,res) => {
	md.connect(eleoption,res);
	
})
app.get("/dblist",(req,res) => {
	md.connect(dboption,res);
	
})
app.get("/dbhotlist",(req,res) => {
	md.connect(dbhotoption,res);
	
})
app.get("/dbhotlist1",(req,res) => {
  md.connect(hotoption1,res);
  
})

//监听端口
app.listen(3000,() => {
	console.log("your server is running at http://localhost:3000");
})
