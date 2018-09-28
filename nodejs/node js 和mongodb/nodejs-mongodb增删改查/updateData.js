var MyData=require("./MyData.js")
var MongoClient=require("mongodb").MongoClient;


var DB_CONN_STR="mongodb://localhost:27017/movies";

MongoClient.connect(DB_CONN_STR,(err,db)=>{
	if(err){
		console.log(err);
	}else{
//		console.log("数据库链接成功")
		MyData.updateData(db,'ele',{name:'下午茶'},{$set:{'link':'123456'}},function(result){
			console.log(result)
		})
		db.close()
	}
})