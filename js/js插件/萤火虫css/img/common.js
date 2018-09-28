/**
 * Created by jameswatt2008 on 2017/5/2.
 */
//获取计算 样式  显示样式
function getStyle(obj) {
    if(obj.currentStyle){//说明current对象 存在  ie
        //ie
        return obj.currentStyle;
    }else{
        //fei ie
        return getComputedStyle(obj);

    }
}