
var MyData=require("./MyData.js")
var MongoClient=require("mongodb").MongoClient;


var DB_CONN_STR="mongodb://localhost:27017/movies";

MongoClient.connect(DB_CONN_STR,(err,db)=>{
	if(err){
		console.log(err);
	}else{
//		console.log("数据库链接成功")
		MyData.removeData(db,'ele',{name:'美食3'},function(result){
			console.log(result)
		})
		db.close()
	}
})

//function remove(db,collectionName,namestring,callback){
//	var	collection=db.collection(collectionName);
//	collection.remove(namestring,(err,result)=>{
//		if(err){
//			console.log(err);
//		}else{
//			
//			callback(result)
//		}
//	})
//}
