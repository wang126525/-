//创建我方飞机
var gameBox = document.getElementById('plane');

function Myplane(w, h, imgurl, boomurl) {
    this.w = w;
    this.h = h;
    this.imgurl = imgurl;
    this.boomurl = boomurl;
    this.createmyplane();
}
//创建我方飞机
Myplane.prototype.createmyplane = function() {
        this.myplane = document.createElement('img');
        this.myplane.src = this.imgurl;
        this.myplane.style.cssText = 'width:' + this.w + 'px;height:' + this.h + 'px;position:absolute;left:' + ((gameBox.offsetWidth - this.w) / 2) + 'px;top:' + (gameBox.offsetHeight - this.h) + 'px;'
        gameBox.appendChild(this.myplane);
        this.planeMove(); //飞机移动
        this.shoot(); //发射子弹
    }
    //飞机在界面移动
Myplane.prototype.planeMove = function() {
        var that = this;
        document.onmousemove = function(ev) {
            var ev = ev || window.event;
            var l = ev.clientX - gameBox.offsetLeft - that.w / 2;
            var t = ev.clientY - gameBox.offsetTop - that.h / 2;
            if (l < 0) {
                l = 0;
            } else if (l >= gameBox.offsetWidth - that.w) {
                l = gameBox.offsetWidth - that.w;
            }

            if (t < 0) {
                t = 0;
            } else if (t >= gameBox.offsetHeight - that.h) {
                t = gameBox.offsetHeight - that.h;
            }

            that.myplane.style.left = l + 'px';
            that.myplane.style.top = t + 'px';
            return false;
        }
        
    }
    //发射子弹
Myplane.prototype.shoot = function() {
    var that = this;
    document.onmousedown = function(ev) {
        var ev = ev || window.event;
        //实例化子弹的创建(左键)
        if (ev.which == 1) {
            bulletshoot() //无需等待200毫秒，就可以发射子弹
            that.timer = setInterval(bulletshoot, 200);
            function bulletshoot() {
                var bullet = new Bullet(6, 14, (that.myplane.offsetLeft + that.w / 2 - 3), (that.myplane.offsetTop - 14), 'img/bullet.png');
            }
        }

    }
    document.onmouseup = function() {
        //鼠标松开停止子弹创建
        clearInterval(that.timer);
    }
    document.oncontextmenu = function() {
        return false;
    }
}

//构造子弹构造函数
function Bullet(w, h, x, y, imgurl) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.imgurl = imgurl;
    this.createBullet();
}
//创建子弹
Bullet.prototype.createBullet = function() {
    this.bullet = document.createElement('img');
    this.bullet.src = this.imgurl;
    this.bullet.style.cssText = 'width:' + this.w + 'px;height:' + this.h + 'px;position:absolute;left:' + this.x + 'px;top:' + this.y + 'px;'
    gameBox.appendChild(this.bullet);
    this.bulletMove();
}
//子弹移动
Bullet.prototype.bulletMove = function() {
    var that = this;
    this.timer = setInterval(function() {
        that.y -= 5;
        if(that.y<=-that.h){
        	clearInterval(that.timer);
        	gameBox.removeChild(that.bullet);
        }
        that.bullet.style.top = that.y + 'px';
        that.hit();//子弹移动时候碰撞
        
    }, 20);
}

//子弹碰撞敌机
Bullet.prototype.hit=function(){
	var aEnemy=document.getElementsByClassName('enemy');//获取所有的敌机
	for(var i=0;i<aEnemy.length;i++){
		if((this.x+this.w)>=aEnemy[i].offsetLeft && this.x<=(aEnemy[i].offsetLeft+aEnemy[i].offsetWidth) && this.y<=(aEnemy[i].offsetTop+aEnemy[i].offsetHeight) && (this.y+this.h)>=aEnemy[i].offsetTop){//碰撞检测
			clearInterval(this.timer);
			gameBox.removeChild(this.bullet);
			aEnemy[i].blood--;
			aEnemy[i].checkblood();
		}
	}
}

//敌方飞机碰撞我方飞机
Enemy.prototype.hitted=function(){
	var aEnemy=document.getElementsByClassName('enemy');
	var myplane=document.getElementsByTagName('img')[0];
//	console.log(myplane)
console.log(aEnemy[0])
	for (var i=0;i<aEnemy.length;i++) {
//		if((this.x+this.w)>=myplane.style.left && this.x<=(myplane.style.left+myplane.style.width) && this.y<=(myplane.style.Top+myplane.style.height) && (this.y+this.h)>=myplane.style.top){
		if((myplane.style.left+myplane.style.width)>=aEnemy[i].style.left && myplane.style.left<=(aEnemy[i].style.left+aEnemy[i].style.width) && myplane.style.Top<=(aEnemy[i].style.top+aEnemy[i].style.height)&&(myplane.style.top+myplane.style.height)>=aEnemy[i].style.top){//碰撞检测	
			console.log('a')
			clearInterval(this.timer);
			that.src=this.boomurl;
		}
	}
}

//敌方飞机构造函数
function Enemy(w,h,x,y,imgurl,boomurl,speed,blood,score){//speed:速度  blood:血量  score分数
	this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.imgurl = imgurl;
    this.boomurl = boomurl;
    this.speed=speed;
    this.blood=blood;
    this.score=score;
    this.createEnemy();
}
//创建敌方飞机
Enemy.prototype.createEnemy=function(){
	var that=this;
	this.enemy = document.createElement('img');
    this.enemy.src = this.imgurl;
    this.enemy.className='enemy';//添加类名方便获取所有的敌机
    this.enemy.style.cssText = 'width:' + this.w + 'px;height:' + this.h + 'px;position:absolute;left:' +this.x+ 'px;top:' + this.y + 'px;'
    gameBox.appendChild(this.enemy);
    this.enemy.blood=this.blood;
    this.enemy.score=this.score;
    this.enemy.checkblood=function(){
    	if(this.blood<=0){
    		clearInterval(that.timer);
    		this.className='';
    		
    		this.src=that.boomurl;
    		setTimeout(function(){
    			gameBox.removeChild(that.enemy);
    			var fen=document.getElementsByTagName('strong')[0];
    			fen.innerHTML=Number(fen.innerHTML)+Number(that.score);
    			
    		},1000)
    	}
    }
    this.enemyMove();
}

Enemy.prototype.enemyMove=function(){
	var that=this;
	this.timer=setInterval(function(){
		that.y+=that.speed;
		if(that.y>=gameBox.offsetHeight){
			clearInterval(that.timer);
			gameBox.removeChild(that.enemy);
		}
		that.enemy.style.top=that.y+'px';
	},50)
	that.hitted();
}

Enemy.prototype.hit=function(){

}

var timer=setInterval(function(){
	for(var i=0;i<getRandom(1,3);i++){//创建的飞机随机数量
		var num=getRandom(1,20);
		if(num<15){
			var enemy=new Enemy(34,24,(getRandom(0,gameBox.offsetWidth-34)),-24,'img/smallplane.png','img/smallplaneboom.gif',getRandom(3,5),1,1);
		}else if(num>=15 && num<20){
			var enemy=new Enemy(46,60,(getRandom(0,gameBox.offsetWidth-46)),-60,'img/midplane.png','img/midplaneboom.gif',getRandom(1,3),3,5);
		}else if(num==20){
			var enemy=new Enemy(110,164,(getRandom(0,gameBox.offsetWidth-110)),-164,'img/bigplane.png','img/bigplaneboom.gif',1,10,10);
		}
	}
},2000);


var myplane = new Myplane(66, 80, 'img/myplane.gif', 'img/myplaneBoom.gif');

function getRandom(min,max){
	return Math.floor(Math.random()*(max-min+1))+min;
}