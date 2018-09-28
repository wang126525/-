var Kind = {
	loadHeader(){
		$("#header").load("views/kind.html #kindHeader",function(){
			console.log("ok")
		})
	},
	loadContent(){
		$("#content").load("views/kind.html #kindContent",function(){
				console.log("ok")
			})
	}
}

export default Kind;