/**
 * Created by jameswatt2008 on 2017/6/19.
 */
//我方飞机
function MyPlane() {
    
    //飞机发射子弹的速度
    this.frequcy = 0;

    //我方飞机  显示

    var that = this;



    this.show = function () {

        //创建
        this.ele = document.createElement('div');
        this.ele.className = 'my-warplain';
        document.body.appendChild(this.ele);
        console.log('show')

        //控制飞机的初始位置
        var body_main = document.getElementById('body_main');
        this.ele.style.left = body_main.offsetLeft+body_main.offsetWidth/2-this.ele.offsetWidth/2+'px';
        this.ele.style.top = body_main.offsetHeight-this.ele.offsetHeight+'px'

        //监听飞机移动
        this.move();
        //让飞机发射子弹
        this.fire();

    }
    //飞机移动
    this.move = function () {
        //根据鼠标的坐标 控制 飞机的移动
        var body_main = document.getElementById('body_main');

        var rightSlide = body_main.offsetLeft +body_main.offsetWidth-this.ele.offsetWidth;
        var leftSlide = body_main.offsetLeft;


        document.onmousemove = function (evt) {
            var left = evt.clientX - that.ele.offsetWidth/2;
            if(left < leftSlide){
                left = leftSlide
            }

            if(left > rightSlide){
                left =rightSlide;
            }

            that.ele.style.left = left +'px';


        }

    }

    //发射
    this.fire = function () {
        //根据 困难程度的选择  产生子弹

        setInterval(function () {
            //生产一个子弹
            var tmp =  new Bullet();
            engine.bullets.push(tmp);


        },this.frequcy);
    }
}