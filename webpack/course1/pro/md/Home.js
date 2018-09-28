var Home = {
	loadHeader(){
		$("#header").load("views/home.html #homeHeader",function(){
			console.log("ok")
		})
	},
	loadContent(){
		$("#content").load("views/home.html #homeContent",function(){
				console.log("ok")
			})
	}
}

export default Home;