/**
 * Created by jameswatt on 2017/3/9.
 */
//获取一个点在一个元素的方向

$.extend({
    _getDir : function($el, coordinates) {
        var w = $el.width(),
            h = $el.height(),
            x = (coordinates.x - $el.offset().left - (w / 2)) * (w > h ? (h / w) : 1),
            y = (coordinates.y - $el.offset().top - (h / 2)) * (h > w ? (w / h) : 1),

        direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        return direction;
    }
})


