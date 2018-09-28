package com.example.thirdloginandroidjs;

import android.content.Context;
import android.webkit.JsPromptResult;
import android.webkit.JsResult;
import android.webkit.WebChromeClient;
import android.webkit.WebView;

public class MWebChromeClient extends WebChromeClient {
	private Context context;
	  
	  public MWebChromeClient(Context context) {
	    super();
	    this.context = context;
	  }

	  // ����Alert�¼�
	  @Override
	  public boolean onJsAlert(WebView view, String url, String message,
	      JsResult result) {
	    return super.onJsAlert(view, url, message, result);
	  }

	  // onReceivedTitle()�����޸���ҳ����
	  @Override
	  public void onReceivedTitle(WebView view, String title) {
//	    ((Activity)context).setTitle("������onReceivedTitle()�����޸���ҳ����");
	    super.onReceivedTitle(view, title);
	  }

	  // ����Confirm�¼�
	  @Override
	  public boolean onJsConfirm(WebView view, String url, String message,
	      JsResult result) {
	    return super.onJsConfirm(view, url, message, result);
	  }

	  // ������ʾ�¼�
	  @Override
	  public boolean onJsPrompt(WebView view, String url, String message,
	      String defaultValue, JsPromptResult result) {
	    return super.onJsPrompt(view, url, message, defaultValue, result);
	  }
}
