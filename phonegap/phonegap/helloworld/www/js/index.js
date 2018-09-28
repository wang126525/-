document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady(){
	var btn1 = document.getElementById("btn1");//拍照
	var btn2 = document.getElementById("btn2");//相册选取
	var msg = document.getElementById("msg");
	var btn3 = document.getElementById("btn3");
	btn1.onclick = function(){
		//拍照图片
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50,destinationType: Camera.DestinationType.FILE_URI });

		function onSuccess(imageData) {
		   var img = document.getElementById('img');
//		   image.src = "data:image/jpeg;base64," + imageData;
			img.src = imageData;
		}
		
		function onFail(message) {
		   alert('Failed because: ' + message);
		}
	}
	btn2.onclick = function(){
		//相册选取图片
		//拍照图片
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType : Camera.PictureSourceType.PHOTOLIBRARY ,
		});

		function onSuccess(imageData) {
		   var img = document.getElementById('img');
//		   image.src = "data:image/jpeg;base64," + imageData;
			img.src = imageData;
		}
		
		function onFail(message) {
		   alert('Failed because: ' + message);
		}
	}
	
	btn3.onclick = function(){
	
		var networkState = navigator.network.connection.type; 		 

		var states = {}; 
		states[Connection.UNKNOWN]  = 'Unknown connection'; 
		states[Connection.ETHERNET] = 'Ethernet connection'; 
		states[Connection.WIFI]     = 'WiFi connection'; 
		states[Connection.CELL_2G]  = 'Cell 2G connection'; 
		states[Connection.CELL_3G]  = 'Cell 3G connection'; 
		states[Connection.CELL_4G]  = 'Cell 4G connection'; 
		states[Connection.NONE]     = 'No network connection'; 

		msg.innerHTML = 'Connection type: ' + states[networkState]; 
	}
}
