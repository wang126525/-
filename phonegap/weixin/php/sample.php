<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx8573fc12eb33447a", "7ea9172500f3fbb741f91e3f92ccce87");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
  <title></title>
</head>
<body>
  <button id="btn1">拍照</button>
   <button id="btn2">分享到朋友圈</button>
  <img src="" id="img" style="width: 120px"/>
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  /*
   * 注意：
   * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
   * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
   * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
   *
   * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
   * 邮箱地址：weixin-open@qq.com
   * 邮件主题：【微信JS-SDK反馈】具体问题
   * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
   */
  wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      // 所有要调用的 API 都要加到这个列表中
      "onMenuShareTimeline",
			"onMenuShareAppMessage",
			"onMenuShareQQ",
			"onMenuShareWeibo",
			"onMenuShareQZone",
			"startRecord",
			"stopRecord",
			"onVoiceRecordEnd",
			"playVoice",
			"pauseVoice",
			"stopVoice",
			"onVoicePlayEnd",
			"uploadVoice",
			"downloadVoice",
			"chooseImage",
			"previewImage",
			"uploadImage",
			"downloadImage",
			"translateVoice",
			"getNetworkType",
			"openLocation",
			"getLocation",
			"hideOptionMenu",
			"showOptionMenu",
			"hideMenuItems",
			"showMenuItems",
			"hideAllNonBaseMenuItem",
			"showAllNonBaseMenuItem",
			"closeWindow",
			"scanQRCode",
			"chooseWXPay",
			"openProductSpecificView",
			"addCard",
			"chooseCard",
			"openCard"
    ]
  });
  wx.ready(function () {
    // 在这里调用 API
//  wx.checkJsApi({
//	    jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
//	    success: function(res) {
//	        // 以键值对的形式返回，可用的api值true，不可用为false
//	        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
//	    }
//		});


			var btn1 = document.getElementById("btn1");
			var img = document.getElementById("img");
			btn1.onclick = function(){
				wx.chooseImage({
			    count: 1, // 默认9
			    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
			    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
			    success: function (res) {
			        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
//			        alert(localIds);
			        img.setAttribute("src",localIds);
//							img.src = localIds;
					}
				});
  		}
  	btn1.onclick = function(){
  		wx.onMenuShareTimeline({
      title: '互谅网之子',
      link: 'http://movie.douban.com/subject/25785114/',
      imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
      trigger: function (res) {
        // 涓嶈灏濊瘯鍦╰rigger涓娇鐢╝jax寮傛璇锋眰淇敼鏈鍒嗕韩鐨勫唴瀹癸紝鍥犱负瀹㈡埛绔垎浜搷浣滄槸涓€涓悓姝ユ搷浣滐紝杩欐椂鍊欎娇鐢╝jax鐨勫洖鍖呬細杩樻病鏈夎繑鍥�
        alert('2');
      },
      success: function (res) {
        alert('3');
      },
      cancel: function (res) {
        alert('4');
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });
    alert('1');
  	}
});
</script>
</html>