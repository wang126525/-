package com.example.scancodeandroidjs;

import android.content.Context;
import android.graphics.Bitmap;
import android.net.http.SslError;
import android.util.Log;
import android.webkit.SslErrorHandler;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MWebViewClient extends WebViewClient {
	 private WebView webView;
	  private Context context;
	  
	  public MWebViewClient(WebView webView) {
	    super();
	    this.webView = webView;
	  }

	  public MWebViewClient(WebView webView, Context context) {
	    super();
	    this.webView = webView;
	    this.context = context;
	  }

	  /**
	   * �ڵ��������������ǲŻ���ã�
	   * ��д�˷�������true���������ҳ��������ӻ����ڵ�ǰ��webview����ת��������������Ǳߡ�
	   */
	  @Override
	  public boolean shouldOverrideUrlLoading(WebView view, String url) {
	    // ʹ���Լ���WebView�������ӦUrl�����¼���������ʹ��Ĭ�������������ҳ��
	    webView.loadUrl(url);
	    // �ǵ����ĵ�����¼�������֪���������ٽ���һ�£�Android�з���True����˼���ǵ���Ϊֹ,
	    // �¼��ͻ᲻��ð�ݴ����ˣ����ǳ�֮Ϊ���ĵ�
	    return true;
	  }
	  
	  @Override
	  public void onPageStarted(WebView view, String url, Bitmap favicon) {
//			Toast.makeText(context, "WebViewClient.onPageStartedҳ�濪ʼ����", Toast.LENGTH_SHORT).show(); 
	    Log.e("WebActivity", "ҳ����ؿ�ʼ");
	    super.onPageStarted(view, url, favicon);
	  }
	  
	  @Override
	  public void onPageFinished(WebView view, String url) {
//			Toast.makeText(context, "WebViewClient.onPageFinishedҳ��������", Toast.LENGTH_SHORT).show(); 
	    Log.e("WebActivity", "ҳ��������");
	    super.onPageFinished(view, url);
	  }
	  
	  /**
	   * �ڼ���ҳ����Դʱ����ã�ÿһ����Դ������ͼƬ���ļ��ض������һ�Ρ�
	   */
	  @Override
	  public void onLoadResource(WebView view, String url) {
//			Toast.makeText(context, "WebViewClient.onLoadResource", Toast.LENGTH_SHORT).show(); 
	    Log.e("WebActivity", "onLoadResource");
	    super.onLoadResource(view, url);
	  }
	  
	  /**
	   * ��д�˷���������webview����https����    [��չ]
	   */
	  @Override
	  public void onReceivedSslError(WebView view,
	      SslErrorHandler handler, SslError error) {
	    super.onReceivedSslError(view, handler, error);
	  }
}
