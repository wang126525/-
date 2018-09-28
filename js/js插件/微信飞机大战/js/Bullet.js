/**
 * Created by jameswatt2008 on 2017/6/19.
 */


//子弹类
function Bullet() {

    var that = this;

    this.init = function () {
        this.ele = document.createElement('div');
        this.ele.className = 'bullet';
        this.moveTimer = null;
        document.body.appendChild(this.ele)

        //控制子弹的初始位置 根据飞机来定的
         var myPlane = document.getElementsByClassName('my-warplain')[0];
        this.ele.style.left = myPlane.offsetLeft +myPlane.offsetWidth/2-this.ele.offsetWidth/2+'px';
        this.ele.style.top = myPlane.offsetTop -this.ele.offsetHeight+'px';

        //子弹的运动

        this.ele.moveTimer =  setInterval(function () {

            that.ele.style.top = that.ele.offsetTop -10 +'px';

            if(that.ele.offsetTop < -that.ele.offsetHeight){
                clearInterval(that.moveTimer);
                document.body.removeChild(that.ele)
               // this
                //engine.bullets.
                var index = 0;
                for(var i=0;i<engine.bullets.length;i++){
                    if(engine[i] == this){
                        index = i;

                    }
                }
                engine.bullets.splice(index,1);

            }

        },50)



    }

    //爆炸 函数
    this.boom = function () {
        clearInterval(this.ele.moveTimer);

        this.ele.className = 'bullet_die';

        var index = 0;
        for(var i=0;i<engine.bullets.length;i++){
            if(engine[i] == this){
                index = i;

            }
        }
        engine.bullets.splice(index,1);

        setTimeout(function () {

            console.log(that.ele)

            document.body.removeChild(that.ele)
        },1000)

    }
    this.init();




}