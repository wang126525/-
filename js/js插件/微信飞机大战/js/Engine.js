/**
 * Created by jameswatt2008 on 2017/6/19.
 */
//主要 学 游戏 运行相关的代码

//创建游戏引擎 对象
function Engine() {

    //属性 和 方法

    //空数组 放 所有的敌机i
    this.enemies = [];
    //空数组 放所有 的 敌机
    this.bullets = [];

    var that = this;

    //选择游戏难度
    this.gameOption = function (callback) {
        console.log('游戏难度选择处理')
        var optionUl =  this.ele.getElementsByClassName('options')[0];
        var opLis = optionUl.getElementsByTagName('li');
        for(var i=0;i<opLis.length;i++){
            opLis[i].onclick = function () {
                console.log(this.value)
                switch (this.value){
                    case 1:
                        //游戏难度 1       600
                        //设置飞机 发射子弹的速度
                        console.log(that.myPlane)
                        that.myPlane.frequcy = 600;

                        break;
                    case 2:
                        //400
                        that.myPlane.frequcy = 400;

                        break;
                    case 3:
                        //200
                        that.myPlane.frequcy = 200;

                        break;
                    case 4:
                        //50
                        that.myPlane.frequcy = 50;
                        break;
                }
                optionUl.style.display = 'none'
                //难度选择了
                //
                callback();

            }
        }

    }
    //logo 显示隐藏


    //初始化操作
    this.init = function () {

        //游戏的场景
        this.ele = document.getElementsByClassName('main')[0];
        //创建我飞机
        this.myPlane = new MyPlane();
        console.log(this.myPlane)

        this.gameOption(function () {
            console.log(this,'22222')
            console.log('游戏难度已经选择了')
            // logo显示
            that.logo = new Logo();
            that.logo.show();
            //loading 显示
            that.loading = new Loading();
            that.loading.show();

            //4秒以后 进度条消失 ，logo 也消失
            setTimeout(function () {
                that.loading.hide();
                that.logo.hide();
                //游戏就要开始了
                that.start();
            },1000)

        });

        //游戏开始
        this.start = function () {
            console.log('游戏开始以后的逻辑')

            //游戏背景运动
            var bgY = 0;
            setInterval(function () {

                that.ele.style.backgroundPosition = '0px '+bgY+'px';
                bgY+=2;
            },30);


            //我方飞机显示 ,发射子弹
            this.myPlane.show();

            //敌人显示
            //随机出现 在屏幕上方 ，往下运动，
            this.createEnemy();

            //碰撞检测
            this.check();




            //数组 记录所有的飞机



        }




        //



        
    }

    this.check = function () {


        //敌机和我方飞机

        //敌机   classname

        setInterval(function () {
            var enemies = document.getElementsByClassName('enemy');
            console.log(enemies.length)
            for(var i=0;i<enemies.length;i++){

                var en = enemies[i];
                if(that.getCollision(en,that.myPlane.ele)){
                    console.log('敌机 和 我方飞机i发生 碰撞')
                   // alert('game over')
                }
            }

            //子弹和敌机

            for(var i=0;i<that.bullets.length;i++){
                var bullet = that.bullets[i];

                for(var j=0;j<that.enemies.length;j++){
                    var  tmp = that.enemies[j];
                    if(that.getCollision(bullet.ele,tmp.ele)){
                        // 子弹爆炸
                        bullet.boom();

                        // //敌机 爆炸
                        // clearInterval(tmp.ele.timer);
                        tmp.hurt();





                    }
                }

            }




        },50)






    }

    //产生敌机
    this.createEnemy = function () {

        setInterval(function () {

            var random =  Math.random()
            if(random >0.5){
                var tmp =  new SmallEnemy();
                tmp.move();
                that.enemies.push(tmp)
            }

        },800)

        setInterval(function () {
            var random =  Math.random()
            if(random >0.5){
                var tmp =  new MiddleEnemy();
                tmp.move();
                that.enemies.push(tmp)

            }

        },2000);
        setInterval(function () {
            var random =  Math.random()
            if(random >0.5){
                var tmp =  new LargeEnemy();
                tmp.move();
                that.enemies.push(tmp)

            }
        },10000)







    }

    //碰撞检测
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

    this.init();


}
