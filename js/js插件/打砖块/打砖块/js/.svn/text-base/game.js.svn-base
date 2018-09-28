/**
 * Created by jameswatt on 2017/2/24.
 */
//球类
function Ball(){
    //小球
    this.ele = document.createElement('div');
    this.gameBox = document.getElementsByClassName('game-box')[0]
    //初始化小球
    this.init = function () {
        this.ele.className = 'box';
        //设置样式
        this.ele.style.width='15px';
        this.ele.style.height='15px';
        this.ele.style.borderRadius='15px';
        this.ele.style.background='#fff';
        this.ele.style.position="absolute";
        this.ele.style.left='50%';
        this.ele.style.bottom='50px';

        this.gameBox.appendChild(this.ele)

        this.ballleft =this.ele.offsetLeft;
        this.balltop =this.ele.offsetTop;
        this.ballW=this.gameBox.offsetWidth;
        this.boxT=this.gameBox.offsetHeight;
    }

    this.init();

    
}
//砖块
function Bricks() {

    this.init = function () {
        for(var i=0;i<99;i++){
            var brick = document.createElement('div');
            brick.className = 'brick-box'
            ////设置样式 css文件中事先已经定义好的样式,浮动定位
            document.getElementsByClassName('game-box')[0].appendChild(brick);
        }

        this.bricks=document.getElementsByClassName('brick-box')
        this.ballSetPostion();
    }


    //定位所有的砖块,因为游戏中有效砖块会消失,所有这里小球的定位需要改成绝对定位
    this.ballSetPostion = function () {
        //先用数组记录所有位置,再修改所有球的位置为绝对定位
        var pos = [];
        for(var i=0;i<this.bricks.length;i++){
            var brick = this.bricks[i];
            var coords = {
                x: brick.offsetLeft,
                y: brick.offsetTop
            };
            pos.push(coords);
        }

        for(var i=0;i<this.bricks.length;i++){
            var brick = this.bricks[i];
            var coords = pos[i]
            brick.style.position = "absolute";
            brick.style.left = pos[i].x + 'px';
            brick.style.top = pos[i].y + 'px';
        }
    }

    this.init();

}
//创建板类
function Plate() {


    this.timeLeft;//左边移动定时器
    this.timeRight;//右边移动定时器

    this.plateStart=true;

    var gameBox = document.getElementsByClassName('game-box')[0]

    this.ele=document.createElement('div');

    this.init = function(){
        this.ele.className='plate'
        gameBox.appendChild(this.ele);
        this.addEvent()

    }

    this.addEvent=function(){
        var that=this;
        document.onkeydown=function(event) {

            console.log(event.keyCode )
            if (that.plateStart && event.keyCode == 37) {

                that.timeLeft = setInterval(function(){
                    that.moveLeft();
                }, 20);
                that.plateStart = false; //执行一次就直接false

            } else if (that.plateStart && event.keyCode == 39) {
                // console.log($('.plate').css('left'));
                that.timeRight = setInterval(function(){
                    that.moveRight();
                }, 20);
                that.plateStart= false;
            }

        }


        document.onkeyup = function() { //抬起事件
            console.log('onkeyup');
            that.plateStart = true;

            clearInterval(that.timeLeft);

            clearInterval(that.timeRight);

        }
        return this;
    }

    //左边移动方法
    this.moveLeft=function(){
        if (this.ele.offsetLeft < 5) {
            return false;
        }
        this.ele.style.left = this.ele.offsetLeft  -5 +'px'
        return this;
    }
//右边移动方法
    this.moveRight=function(){
        if (this.ele.offsetLeft + this.ele.offsetWidth > gameBox.offsetWidth - 5) {
            return false;
        }
        this.ele.style.left =this.ele.offsetLeft +5 +'px'
        return this;
    }




    this.init();
}

//定义一个打砖块类 游戏引擎类 碰撞检测
// cocos-2d-js     cocos2d-x（c++） unity3d（C#）
function BrickGame(){
    
    //进行游戏的盒子
    this.gameBox = document.getElementsByClassName('game-box')[0];
    //提示
    this.daglog = document.getElementsByClassName('daglog')[0]

    //小球 对象
    this.ball = new Ball();
    //所有的砖块 对象
    this.bricks = new Bricks() ;

    this.plate = new Plate();


    this.remove=0;//
    this.score=0;//
    this.number=0;//



    this.ballleft =this.ball.ele.offsetLeft;
    this.balltop =this.ball.ele.offsetTop;
    this.ballW=this.gameBox.offsetWidth;
    this.boxT=this.gameBox.offsetHeight;


    this.speedX=3;//X速度
    this.speedY=3;//速度

    this.run = function () {
        var that=this;
        this.ballleft =this.ball.ele.offsetLeft;
        this.balltop =this.ball.ele.offsetTop;


        //左右边界

        if (this.ball.ele.offsetLeft+this.ball.ele.offsetWidth>this.gameBox.offsetWidth|| this.ballleft < 0) {
            this.speedX = -this.speedX;
        }
        //上下边界

        if (this.ball.ele.offsetTop+this.ball.ele.offsetWidth>this.gameBox.offsetHeight|| this.balltop < 0) {
            this.speedY = -this.speedY;
        }

        // console.log(this.ballleft,this.speedX);

        this.ball.ele.style.left = this.ballleft + this.speedX + 'px'
        this.ball.ele.style.top = this.balltop - this.speedY + 'px'


        //碰到底边直接结束
        if (this.balltop + 15 > 500){
            this.daglog.innerHTML=' 游戏结束';
            this.daglog.style.display = 'block'
            clearInterval(time);
        }

        // 球与板
        if (this.getCollision(this.ball.ele, this.plate.ele)) {
            var b1 = this.ball.ele.offsetTop + this.ball.ele.offsetHeight; //下
            var t2 = this.plate.ele.offsetTop; //上
            console.log(b1,t2);
            if (b1>t2+2) { //左右检测
                this.speedX = -this.speedX;
                //碰在的 板的下面2像素的帝乡 改变 x方向
                console.log(1)
            }else{
                //                 //碰在的 板的上面2像素的帝乡 改变 Y方向

                this.speedY = -this.speedY;
                console.log(2)

            }
        }
        //球与砖
       for(var i=0;i<this.bricks.bricks.length;i++){
           var v = this.bricks.bricks[i]
           if (this.getCollision(that.ball.ele,v)) {
               var b1 = that.ball.ele.offsetTop; //下
               var t2 = v.offsetTop+v.offsetHeight;

               var l1 = that.offsetLeft; //左
               var r2 = v.offsetLeft + v.offsetWidth; //右

               var r1 = that.offsetLeft + that.offsetWidth; //右
               var l2 = v.offsetLeft; //左

               console.log(t2)
               if (l1>=r2 ||l2>=r1 ) { //左右检测
                   //
                   this.speedX = -this.speedX;
               }else{
                   that.speedY = -that.speedY;
               }
               this.gameBox.removeChild(v)

               document.getElementsByClassName('score')[0].getElementsByTagName('span')[0].innerHTML = that.score+=5;

           }
       }

    }
// 碰撞检测
    this.getCollision=function (obj1, obj2, callback) {
        //参数为碰撞物体与被碰撞物体
        var l1 = obj1.offsetLeft; //左
        var r1 = obj1.offsetLeft + obj1.offsetWidth; //右
        var t1 = obj1.offsetTop; //上
        var b1 = obj1.offsetTop + obj1.offsetHeight; //下

        var l2 = obj2.offsetLeft; //左
        var r2 = obj2.offsetLeft + obj2.offsetWidth; //右
        var t2 = obj2.offsetTop; //上
        var b2 = obj2.offsetTop + obj2.offsetHeight; //下
        if (callback) {
            callback(l1, r1, t1, b1, l2, r2, t2, b2);
        }
        if (r1 < l2 || l1 > r2 || t1 > b2 || b1 < t2) {
            return false;//没有碰撞
        } else {
            return true;
        }
    }

    var time;
    this.init= function () {
        var that=this;
        time = setInterval(function () {
            that.run();

        },20)

    }

    this.init()

    
    
    
    
}