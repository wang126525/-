onmessage = function(e) {
	console.log(1)
	console.log(e)
	var num = e.data;
	var r = 0;
	for(var i = 1; i < num; i++) {
		r += i;
	}
	postMessage(r);
}