/**
 * Created by jameswatt2008 on 2017/6/20.
 */

function Loading() {
    this.timer = null;

}

Loading.prototype.show = function () {
    var that = this;
    this.ele = document.createElement('div');
    this.ele.className = 'loading';
    document.body.appendChild(this.ele);

    var imgs = ['images/loading1.png','images/loading2.png','images/loading3.png']
    var index = 0;
    this.timer = setInterval(function () {
        that.ele.style.background ='url('+imgs[index%3]+')'
        index++;
    },500);
}
Loading.prototype.hide = function () {
    clearInterval(this.timer);
    document.body.removeChild(this.ele);
}