package com.example.thirdloginandroidjs;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.view.KeyEvent;
import android.webkit.WebView;
import android.widget.Toast;

public class MainActivity extends ActionBarActivity {
	private WebView webView;
	private QQLogin qqLogin;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		initViews();
		qqLogin = new QQLogin(this,webView);
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
		 * JS����Android(Java)�޲����ķ��� ��¼
		 */
		public void jsCallWebView() {
			if((Boolean) SharedPreferenceUtils.get(MainActivity.this, "isLogin", true)){
				if (!QQLogin.mTencent.isSessionValid()) {
					QQLogin.mTencent.login(MainActivity.this, "all", qqLogin);
				}
			}else{
				Toast.makeText(context, "���Ѿ���¼�����ٴε�¼!", Toast.LENGTH_SHORT).show();
			}
		}
		
		/**
		 * JS����Android(Java)�޲����ķ��� �˳���¼
		 */
		public void jsCallWebViewOut() {
			if((Boolean) SharedPreferenceUtils.get(MainActivity.this, "isLogin", true)){
				Toast.makeText(context, "����û�е�¼,���ȵ�¼��", Toast.LENGTH_SHORT).show();
			}else{
				if (QQLogin.mTencent.isSessionValid()) {
					QQLogin.mTencent.logout(MainActivity.this);
				}
				SharedPreferenceUtils.put(MainActivity.this, "isLogin", true);
				Toast.makeText(context, "�˳��ɹ���", Toast.LENGTH_SHORT).show();
			}
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
			
		}
	}
}
