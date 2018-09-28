function Carousel(obj,indexA) {
        this.init(obj, indexA);
}
Carousel.prototype = {
    init : function(obj , indexA) {
    var that = this;
    this.obj = obj;
    this.num = 4; 
    this.indexA = indexA;
    this.width = 573;
    this.index = 0;
    this.flag = true;
    this.timer = null;
    this.left = this.obj.parentNode.getElementsByClassName('left')[0];
    this.right = this.obj.parentNode.getElementsByClassName('right')[0];
    this.autoTimer = setInterval(function (){
        that.next();
    }, 2000);
    this.obj.parentNode.onmouseover = function (){
        clearInterval(that.autoTimer);
    };
    this.obj.parentNode.onmouseout = function (){
        that.autoTimer = setInterval(function (){
            that.next();
        },2000);
    };
    this.left.onclick = function() {
        that.prev();
    };
    this.right.onclick = function() {
        that.next();
    };
    for(var i =0;i< this.num;i++) {
        this.indexA[i].index = i;
        this.indexA[i].onmouseover = function() {
            that.index = this.index;
            that.move(this.index );
        }
    }
},
prev : function() {
    this.index--;
    if(this.index === -1) {
        this.index = this.num ;
        this.obj.style.left = (this.index +1) * (-this.width) +'px';
        this.index--;
    }
    this.move(this.index);
},
next: function (){   
    this.index++;
    if(this.index === this.num) {
        this.index = 0;
        this.obj.style.left = 0;
    } 
    this.move(this.index);
},
move: function(index,callBack) {
    var translate = - (index +1) * this.width;
    var that = this;
    clearInterval(that.timer);
    for (var i = 0; i < this.num; i++) {
        this.indexA[i].className = '';
    }
    index === -1 ? index = this.num - 1 :'';
    this.indexA[index].className = "active";
    that.timer = setInterval(function (){
        var iSpeed = (translate - that.obj.offsetLeft) / that.num;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if( iSpeed === 0 ) {
            clearInterval(that.timer);
            callBack && callBack.call(that);
        } else {
            that.obj.style.left =  that.obj.offsetLeft + iSpeed + 'px';
            }
        }, 25);
    }
};