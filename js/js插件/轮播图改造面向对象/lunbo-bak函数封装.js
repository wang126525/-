/**
 * Created by jameswatt2008 on 2017/6/8.
 */
function lunbo(className) {
    //无缝轮播，必须 在尾部要添加一个图片（第一张图）;
    var box = document.getElementsByClassName(className)[0];

    var ul = box.getElementsByClassName('item')[0];
    var lis = ul.getElementsByTagName('li');

    var cloneFirstLi = document.createElement('li');
    var img = document.createElement('img');
    img.src = lis[0].firstElementChild.src;
    cloneFirstLi.appendChild(img);
    ul.appendChild(cloneFirstLi);

//          -590*0
    //ul.style.left = -590*5+'px';

    //animate(ul,{left:-590*1})

    var current = 0;//控制当前的页码

    var rightBtn = box.getElementsByClassName('rightBtn')[0];
    rightBtn.onclick = function () {
        current++;
        if(current == 6){
            ul.style.left = 0+'px';
            current=1;
        }
        //1
        console.log(current)
        animate(ul,{left:-590*current});

        if(current == 5){
            showCurrentPagePoint(0)
        }else{
            showCurrentPagePoint(current)

        }
    };

    var leftBtn = box.getElementsByClassName('leftBtn')[0];
    leftBtn.onclick = function () {
        current--;
        if(current == -1){
            ul.style.left = -5*590+'px';
            current=4;
        }
        //1
        animate(ul,{left:-590*current});
        showCurrentPagePoint(current);
    }


    //自动播放
    var atuoPlaytimer = setInterval(function () {
        rightBtn.onclick();
    },2000);

    ul.onmouseenter = function () {
        clearInterval(atuoPlaytimer)
    }
    ul.onmouseleave = function () {
        clearInterval(atuoPlaytimer)
        atuoPlaytimer = setInterval(function () {
            rightBtn.onclick();
        },2000);
    }

    //控制小圆点的显示
    function showCurrentPagePoint(current) {
        var page = box.getElementsByClassName('page')[0];
        var lis = page.getElementsByTagName('li');
        for(var i=0;i<lis.length;i++){
            lis[i].style.background = 'red';
        }
        lis[current].style.background = 'white';

    }
    //
    showCurrentPagePoint(0)


    //点击小圆点
    var page = box.getElementsByClassName('page')[0];
    page.onmouseenter = function () {
        clearInterval(atuoPlaytimer)
    }
    page.onmouseleave = function () {
        clearInterval(atuoPlaytimer)
        atuoPlaytimer = setInterval(function () {
            rightBtn.onclick();
        },2000);
    }

    var lis = page.getElementsByTagName('li');
    for(let i=0;i<5;i++){
        //立即执行函数
        //lis[i].myIndex = i;

//              lis[i].onclick =function () {
////                      console.log(index,i);
//                      showCurrentPagePoint(i)
//                      animate(ul,{left:-590*i});
//                      current = i;
//
//                  }

        (function (index) {
            lis[i].onclick =function () {
                console.log(index,i);
                showCurrentPagePoint(index)
                animate(ul,{left:-590*index});
                current = index;

            }
        })(i);
    }
}