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
		// ����WebView��JavaScript��֧��
		webView.getSettings().setJavaScriptEnabled(true);
		// ��assetsĿ¼����ļ���html
		webView.loadUrl("file:///android_asset/web.html");
		// �Զ���WebView�ı�����ɫ
		webView.setBackgroundColor(Color.TRANSPARENT);// �����ñ���ɫΪtransparent
		// webView.setBackgroundResource(R.drawable.webbg);//Ȼ�����ñ���ͼƬ
		// webView.loadUrl("http://www.baidu.com");
		MWebViewClient mWebViewClient = new MWebViewClient(webView, getApplicationContext());
		webView.setWebViewClient(mWebViewClient);
		MWebChromeClient mWebChromeClient = new MWebChromeClient( getApplicationContext());
		webView.setWebChromeClient(mWebChromeClient);
		// ���JS����Android(Java)�ķ����ӿ�
		webView.addJavascriptInterface(new MJavascriptInterface(getApplicationContext()), "WebViewFunc");
	}

	/**
	 * �˳�����
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
		 * JS����Android(Java)�޲����ķ���
		 */
		public void jsCallWebView() {
//			Toast.makeText(context, "JS Call Java!", Toast.LENGTH_SHORT).show();
			// ���������
			Intent intent=new Intent(MainActivity.this,CaptureActivity.class );
			startActivityForResult(intent, 1);
		}

		/**
		 * JS����Android(Java)�������ķ���
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
			String result = data.getExtras().getString("result");//�õ���Activity �رպ󷵻ص�����
	        Log.i("tag", "----result----:"+result);
	        webView.loadUrl("javascript:javacalljsparam(" + "'"+result+"'"+ ")"); // �޲�������
		}
	}
}
