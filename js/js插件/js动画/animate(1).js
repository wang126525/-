/**
 * Created by jameswatt2008 on 2017/6/5.
 */

function animate(div,targetX) {
    var target = targetX;
    div.timer =  setInterval(function () {

        var speed = (target - div.offsetTop)/8;
        speed = (speed>0? Math.ceil(speed): Math.floor(speed));
        div.style.top = div.offsetTop + speed +'px';
        if(div.offsetTop == target){
            clearInterval(div.timer);
        }
    },30);
}