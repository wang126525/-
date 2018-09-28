unction Player(options){
	this.config = {
		container:"",
		vdo:"",
		controls:"",
		playImg:"",
		currentimeText:"",
		durationText:"",
		playRange:"",
		volumeImg:"",
		volumeRange:"",
		fullscreenImg:"",
		test:""
	}
	
	for(var i in options){
		this.config[i] = options[i];
	}

	this.init();
	
}
Player.prototype = {
	init(){
		var that = this;
		this.isPlay = "0";
		this.isFullScreen = "0";
		this.container = document.querySelector(this.config.container);
		this.vdo = document.querySelector(this.config.vdo);
		this.controls = document.querySelector(this.config.controls);
		this.playImg = document.querySelector(this.config.playImg);
		this.currentimeText = document.querySelector(this.config.currentimeText);
		this.durationText = document.querySelector(this.config.durationText);
		this.playRange = document.querySelector(this.config.playRange);
		this.volumeImg = document.querySelector(this.config.volumeImg);
		this.volumeRange = document.querySelector(this.config.volumeRange);
		this.fullscreenImg = document.querySelector(this.config.fullscreenImg);
		this.test = document.querySelector(this.config.test);
		//paly or pause
		this.playImg.onclick = function(){
			that.playOrPause();
		}
		this.test.onclick = function(){
			that.playOrPause();
		}
		this.vdo.onclick = function(){
			that.pause();
		}
		this.playRange.onchange = function(){
			var val = this.value;
			that.vdo.currentTime = val;
		}
		this.fullscreenImg.onclick = function(){
			that.fullscreen();
		}
	},
	fullscreen(){
		var that = this;
		if(that.isFullScreen == "0"){
			that.container.webkitRequestFullScreen();
			that.container.style.width = that.screenW + "px";
			that.container.style.height = that.screenH + "px";
			that.isFullScreen = "1";
		}else{
			document.webkitCancelFullScreen();
			that.container.style.width = that.vdoW + "px";
			that.container.style.height = that.vdoH + "px";
			that.isFullScreen = "0";
		}
		
	},
	playOrPause(){
		var that = this;
		if(that.isPlay == "0"){
				console.log(that.vdo.duration);
				//设置视频最大值
				that.setPlayRangeMax(that.vdo.duration);
				//监听播放进度
				that.vdo.addEventListener("timeupdate",function(){
					console.log(this.currentTime);
					that.playRange.value = Math.floor(this.currentTime);
					that.currentimeText.innerHTML = that.setTime(this.currentTime);
				},false);
				//获取视频的宽高
				that.vdoW = that.vdo.offsetWidth;
				that.vdoH = that.vdo.offsetHeight;
				console.log(that.vdoW+"----"+that.vdoH)
				//获取电脑分辨率的大小
				that.screenW = screen.width;
				that.screenH = screen.height;
				console.log(that.screenW+"----"+that.screenH)
				console.log("0000");
				that.playImg.src = "img/play.png";
				that.test.style.display = "none";
				that.vdo.play();
				that.isPlay = "1";
			}else{
				that.pause();
			}
	},
	pause(){
		var that = this;
		console.log("1111");
		that.playImg.src = "img/pause.png";
		that.test.style.display = "block";
		that.vdo.pause();
		that.isPlay = "0";
	},
	setPlayRangeMax(max){
		this.playRange.max = max;
		this.durationText.innerHTML = this.setTime(max);
	},
	//转换时间
	setTime(max){
		var str = "";
		var h = Math.floor(max/3600);
			if(h == 0){
				str += "";
			}else{
				h = h < 10 ? "0" + h : h;
				str += h + ":";
			}
		var m = Math.floor((max - h * 3600)/60);
			m = m < 10 ? "0" + m : m;
			str += m + ":";
		var s = Math.floor(max - h * 3600 - m * 60);
			s = s < 10 ? "0" + s : s;
			str += s
		return str;
	}
}
0