(function ($) {
	$(function () {
		$('.single-demo').bind('mouseenter mouseleave', function (e) {
			var oA = $(this).children('a');


			var direction = $._getDir($(this),{x: e.pageX, y: e.pageY})

			var type = e.type;


			if(type === 'mouseenter') {
				// 指定起始位置
				switch(direction) {
					case 0:
						oPos = {
							left: 0,
							top: -oA.outerHeight()
						};
						break;
					case 1:
						oPos = {
							left: oA.outerWidth(),
							top: 0
						};
						break;
					case 2:
						oPos = {
							left: 0,
							top: oA.outerHeight()
						};
						break;
					case 3:
						oPos = {
							left: -oA.outerWidth(),
							top: 0
						};
						break;
				}
				// 运动到终点
				oA.css(oPos).stop(true).animate({
					left: 0,
					top: 0
				});
			} else {
				// 指定鼠标离开的终点位置
				switch(direction) {
					case 0:
						oPos = {
							left: 0,
							top: -oA.outerHeight()
						};
						break;
					case 1:
						oPos = {
							left: oA.outerWidth(),
							top: 0
						};
						break;
					case 2:
						oPos = {
							left: 0,
							top: oA.outerHeight()
						};
						break;
					case 3:
						oPos = {
							left: -oA.outerWidth(),
							top: 0
						};
						break;
				}
				// 运动到终点
				oA.stop(true).animate(oPos);
			}
		});
	});
})(jQuery);