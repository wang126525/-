function Clock(options){
	//基本参数
	this.config = {
		target:"",
		width:"",
		height:"",
		border:""
	}
	//赋值----this.config和调用的optios参数填充
	for(var i in options){
//		console.log(options[i])
		this.config[i] = options[i];
	}
	console.log(this.config);
	
	//获取DOM 节点   -----  新方法的运用   ----  写法类似于jQuery
	this.canvas = document.querySelector("#"+this.config.target);
//	this.canvas = document.getElementById(this.config.target);
	
	//设置canvas的宽高，注意不要写成ctx.canvas.style.width-------不可取
	this.canvas.width = this.config.width;
	this.canvas.height = this.config.height;
	this.canvas.style.border = this.config.border;
	
	//上下文对象
	this.ctx = this.canvas.getContext("2d");
	
	//初始化方法
	this.init();
}

Clock.prototype = {
//	init:() => {
//		console.log("init")
//	}
//	init:function(){
//		console.log("init")
//	}
	init(){
		console.log("init");
		this.drawHelpLine();
		this.ctx.translate(this.config.width/2,this.config.height/2);
		
		this.drawBigArc();
		//保存一个状态
		this.ctx.save();
		
		this.drawLineScaleSmall();//画刻度-----短
		this.drawLineScaleLong();//画刻度-----长
		
		this.seconds();
		this.zi()
		
	},
	drawHelpLine(){
		this.ctx.strokeStyle = "#f66";
		this.ctx.moveTo(0,this.config.height/2);
		this.ctx.lineTo(this.config.width,this.config.height/2);
		this.ctx.stroke();
		this.ctx.moveTo(this.config.width/2,0);
		this.ctx.lineTo(this.config.width/2,this.config.height);
		this.ctx.stroke();
	},
	drawBigArc(){
		this.ctx.beginPath();
		this.r = (this.config.width > this.config.height ? this.config.height : this.config.width)/2;
		this.ctx.arc(0,0,this.r,0,Math.PI*2);
		this.ctx.stroke()
	},
	drawLineScaleSmall(){
		
		for(var i = 0; i < 12; i++){
			this.ctx.restore();
			this.ctx.save();
			this.ctx.rotate(Math.PI/6 * i);
			this.ctx.translate(this.r - 14,0);
			this.ctx.fillRect(0,-3,14,6);
		}
		
	},
	drawLineScaleLong(){
		for(var i = 0; i < 60; i++){
			this.ctx.restore();
			this.ctx.save();
			this.ctx.rotate(Math.PI/30 * i);
			this.ctx.translate(this.r - 10,0);
			this.ctx.fillStyle="blue";
			if(i % 5 != 0){
				this.ctx.fillRect(0,-2,10,4);
				
			}
			
		}
	},
	seconds(){
		var date=new Date();
		var h=date.getHours();
		var m=date.getMinutes();
		var s=date.getSeconds();
		
		console.log(h,m,s)
		
		var i=s;
		var that=this
		setInterval(function(){
			
			that.ctx.restore();
			that.ctx.save();
			that.ctx.clearRect(-150,-150,300,300);
			that.ctx.rotate(Math.PI/30*i);
			that.ctx.fillRect(2,20,-4,-170);
			
			
			that.ctx.beginPath();
			that.ctx.restore();
			that.ctx.save();
			m1=m+(i/60)
//			console.log(m)
			that.ctx.rotate(Math.PI/30*m1)
			that.ctx.fillRect(3,20,-6,-150);
			
			
			that.ctx.beginPath();
			that.ctx.restore();
			that.ctx.save();
			h1=h+(i/3600);
//			console.log(h)
			that.ctx.rotate(Math.PI/6*h1)
			that.ctx.fillRect(4,20,-8,-130);
			
			
			
			i++;
		},1000)
		
		
	},
	zi(){
		var that=this
		setInterval(function(){
			
			
		var date=new Date();
		var h=date.getHours();
		var m=date.getMinutes();
		var s=date.getSeconds();
		h<10? h='0'+h:h;
		m<10? m='0'+m:m;
		s<10? s='0'+s:s;
		that.ctx.restore();
		that.ctx.save();
		that.ctx.beginPath();
		that.ctx.clearRect(-50,150,150,50);
		that.ctx.textBaseline="top"
		that.ctx.font="italic 30px 黑体"
		that.ctx.fillText(h+':'+m+':'+s,-50,150)
			
			
			
			
		},1000)
	}
}
