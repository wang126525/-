onmessage = function (e) {
var arr = JSON.parse(e.data);
var str = '';
for (var i = 0, len = arr.length; i < len; i++) {
if (parseInt(arr[i]) % 3 == 0) {
if (str != '') str += ';';
str += arr[i];
}
}
postMessage(str);
close();

};