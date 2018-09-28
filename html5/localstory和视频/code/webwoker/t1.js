onmessage = function (e) {
var arr = [];
for (var i = 0; i < 100; i++) {
arr.push(parseInt(Math.random() * 100));
}

var worker = new Worker('t2.js');
worker.postMessage(JSON.stringify(arr));
worker.onmessage = function (e) {
//把挑选结果发回前台
postMessage(e.data);
};
}