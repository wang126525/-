import "./../scss/more.scss"
var Mdmore={
	head:function(){
		$("#header").load("./html/more.html #morehead",function(){
			console.log("ok")
		})
	},
	content:function(){
		$("#content").load("./html/more.html #morecontent",function(){
			console.log("ok")
		})
	}
}

export default Mdmore