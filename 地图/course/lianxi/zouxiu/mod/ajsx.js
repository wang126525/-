

export default {
	ajax:function(ob,callback){
		$.ajax({
				type:"get",
				url:ob.url,
				dataType:ob.type,
				data:ob.data,
				success:function(resu){
					callback(resu)
				}
			});
	}
}
