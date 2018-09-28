var express = require('express');
var router = express.Router();
var url = require("url");
var MongoClient = require("mongodb").MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/qianfeng';
var MyData = require("./../md/MyData.js");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/deleteuser', function(req, res, next) {
  var username = url.parse(req.url,true).query.username;
 MongoClient.connect(DB_CONN_STR,(err,db) => {
    if(err){
      console.log(err);
    }else{
       console.log("数据库连接成功");
       MyData.deleteData(db,"user",{username:username},function(data){
         console.log(data);
         res.send("1");
       })
    }
  });
});
router.get('/userlist', function(req, res, next) {
  MongoClient.connect(DB_CONN_STR,(err,db) => {
    if(err){
      console.log(err);
    }else{
       console.log("数据库连接成功");
       MyData.selectData(db,"user",{},{"_id":0},function(data){
         console.log(data);
         res.send(data);
       })
    }
  });
});
router.get('/register', function(req, res, next) {
  var userObj = url.parse(req.url,true).query;
  console.log(userObj);
  var obj = [];
  obj.push(userObj);
  MongoClient.connect(DB_CONN_STR,(err,db) => {
    if(err){
      console.log(err);
      //注册失败
      res.send("2");
    }else{
      console.log("数据库连接成功");
      console.log(obj)
      MyData.selectData(db,"user",{"username":userObj.username},{"_id":0},function(data){
        if(data.length == 0){
           //可以注册
           MyData.insertData(db,"user",obj,function(data){
             console.log("ok");
             //表示注册成功
            res.send("1");
           })
        }else{
          //表示用户名重名
          res.send("0");
        }
      })
    }
  })
});
router.get('/adminLogin', function(req, res, next) {
  //取得前端提交过来的数据
  var userObj = url.parse(req.url,true).query;
  console.log(userObj);
  MongoClient.connect(DB_CONN_STR,(err,db) => {
    if(err){
      console.log(err);
    }else{
      console.log("数据库连接成功");
      MyData.selectData(db,"admin",{"username":userObj.username,"password":userObj.password},{"_id":0},function(data){
        if(data.length == 0){
           res.send("0");
        }else{
          res.send("1");
        }
      })
    }
  })
});
module.exports = router;
