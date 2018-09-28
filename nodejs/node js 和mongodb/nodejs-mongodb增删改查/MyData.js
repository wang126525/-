
//Nodejs 链接mongo的 增删改查

var MyData = {
//	data=[{},{}]数组类型的
	insertData:function(db,collectionName,data,callback){
		var collection = db.collection(collectionName);
	    collection.insertMany(data,(err,result) => {
	    	if(err){
	    		console.log(err);
	    	}else{
	    		callback(result)
	    	}
	    })
	},
	selectData:function(db,collectionName,selectStr1,selectStr2,callback){
		var collection = db.collection(collectionName);
		var selectStr1 = selectStr1;//查询条件{'name':'123'}
		var selectStr2 = selectStr2;//显示字段{'name':'123'}
		collection.find(selectStr1,selectStr2).toArray((err,result) => {
			//toArray方法将查询到的对象组成一个数组
			if(err){
	    		console.log(err);
	    	}else{
	    		callback(result)
	    	}
		})
	},
	removeData:function(db,collectionName,namestring,callback){
					var	collection=db.collection(collectionName);
					collection.remove(namestring,(err,result)=>{
						if(err){
							console.log(err);
						}else{
							
							callback(result)
						}
					})
	},
	
	updateData:function(db,collectionName,selectStr1,selectStr2,callback){
		var collection = db.collection(collectionName);
		var selectStr1 = selectStr1;//查询条件{'name':'123'}
		var selectStr2 = selectStr2;//显示字段{$set:{'name':'123'}}
		collection.update(selectStr1,selectStr2,(err,result) => {
			
			if(err){
	    		console.log(err);
	    	}else{
	    		callback(result)
	    	}
		})
	}
}

module.exports = MyData;