package com.example.scancodeandroidjs;

import com.zbar.lib.CaptureActivity;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.util.Log;
import android.view.KeyEvent;
import android.webkit.WebView;
import android.widget.Toast;

public class MainActivity extends ActionBarActivity {
	private WebView webView;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		initViews();
	}
	
	@SuppressLint({ "JavascriptInterface", "SetJavaScriptEnabled" }) 
	private void initViews() {
		webView = (WebView) findViewById(R.id.webView_web);
		// 设置WebView对JavaScript的支持
		webView.getSettings().setJavaScriptEnabled(true);
		// 从assets目录下面的加载html
		webView.loadUrl("file:///android_asset/web.html");
		// 自定义WebView的背景颜色
		webView.setBackgroundColor(Color.TRANSPARENT);// 先设置背景色为transparent
		// webView.setBackgroundResource(R.drawable.webbg);//然后设置背景图片
		// webView.loadUrl("http://www.baidu.com");
		MWebViewClient mWebViewClient = new MWebViewClient(webView, getApplicationContext());
		webView.setWebViewClient(mWebViewClient);
		MWebChromeClient mWebChromeClient = new MWebChromeClient( getApplicationContext());
		webView.setWebChromeClient(mWebChromeClient);
		// 添加JS调用Android(Java)的方法接口
		webView.addJavascriptInterface(new MJavascriptInterface(getApplicationContext()), "WebViewFunc");
	}

	/**
	 * 退出监听
	 */
	@Override
	public boolean dispatchKeyEvent(KeyEvent event) {
		if (event.getKeyCode() == KeyEvent.KEYCODE_BACK && event.getAction() == KeyEvent.ACTION_DOWN && event.getRepeatCount() == 0) {
			if (webView.canGoBack()) {
				webView.goBack();
				return false;
			} else {
				MainActivity.this.finish();
				return true;
			}
		}
		return false;
		// return super.dispatchKeyEvent(event);
	}

	class MJavascriptInterface {
		private Context context;

		public MJavascriptInterface(Context context) {
			this.context = context;
		}

		/**
		 * JS调用Android(Java)无参数的方法
		 */
		public void jsCallWebView() {
//			Toast.makeText(context, "JS Call Java!", Toast.LENGTH_SHORT).show();
			// 调用照相机
			Intent intent=new Intent(MainActivity.this,CaptureActivity.class );
			startActivityForResult(intent, 1);
		}

		/**
		 * JS调用Android(Java)含参数的方法
		 * 
		 * @param param
		 */
		public void jsCallWebView(String param) {
			Toast.makeText(context, "JS Call Java!" + param, Toast.LENGTH_SHORT).show();
		}

		public void jsCallWebView(Uri param) {
			Toast.makeText(context, "JS Call Java!" + param, Toast.LENGTH_SHORT).show();
		}
	}


	@Override
	protected void onActivityResult(int requestCode, int resultCode, Intent data) {
		super.onActivityResult(requestCode, resultCode, data);
		if (resultCode == RESULT_OK) {
			String result = data.getExtras().getString("result");//得到新Activity 关闭后返回的数据
	        Log.i("tag", "----result----:"+result);
	        webView.loadUrl("javascript:javacalljsparam(" + "'"+result+"'"+ ")"); // 无参数调用
		}
	}
}
