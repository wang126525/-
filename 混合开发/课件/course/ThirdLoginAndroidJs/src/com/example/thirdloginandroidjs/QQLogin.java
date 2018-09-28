package com.example.thirdloginandroidjs;

import org.json.JSONException;
import org.json.JSONObject;

import android.content.Context;
import android.util.Log;
import android.webkit.WebView;
import android.widget.Toast;

import com.lidroid.xutils.HttpUtils;
import com.lidroid.xutils.exception.HttpException;
import com.lidroid.xutils.http.ResponseInfo;
import com.lidroid.xutils.http.callback.RequestCallBack;
import com.lidroid.xutils.http.client.HttpRequest.HttpMethod;
import com.tencent.connect.common.Constants;
import com.tencent.tauth.IUiListener;
import com.tencent.tauth.Tencent;
import com.tencent.tauth.UiError;

public class QQLogin implements IUiListener {

	private Context context;
	public static Tencent mTencent;
	private WebView webView;

	public QQLogin(Context context,WebView webView) {
		this.context = context;
		this.webView = webView;
		if (mTencent == null) {
			mTencent = Tencent.createInstance(Constant.QQ_APP_ID, context);
		}
	}

	@Override
	public void onComplete(Object response) {
		if (null == response) {
			Toast.makeText(context, R.string.auth_failure, Toast.LENGTH_SHORT).show();
			return;
		}
		JSONObject jsonResponse = (JSONObject) response;
		if (null != jsonResponse && jsonResponse.length() == 0) {
			Toast.makeText(context, R.string.auth_failure, Toast.LENGTH_SHORT).show();
			return;
		}
		Toast.makeText(context, R.string.auth_success, Toast.LENGTH_SHORT).show();
		// 有奖分享处理
		// handlePrizeShare();
		String openId = null, accessToken = null;
		try {
			openId = ((JSONObject) response).getString(Constants.PARAM_OPEN_ID);
			accessToken = ((JSONObject) response).getString(Constants.PARAM_ACCESS_TOKEN);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Log.i("QQ", "QQLogin,openId:" + openId + ",accessToken:"+ accessToken + ",platform:" + "qq");
//		Toast.makeText(context,"QQLogin,openId:" + openId + ",accessToken:" + accessToken,Toast.LENGTH_SHORT).show();
		doComplete(openId, accessToken);
	}

	/**
	 * 获取用户的信息
	 */
	protected void doComplete(String openId, String accessToken) {
		HttpUtils httpUtils=new HttpUtils();
		String url="https://graph.qq.com/user/get_user_info?access_token="+accessToken+"&oauth_consumer_key="+Constant.QQ_APP_ID+"&openid="+openId;
		httpUtils.send(HttpMethod.GET, url, new RequestCallBack<String>() {

			@Override
			public void onFailure(HttpException arg0, String arg1) {
				// TODO Auto-generated method stub
				System.out.println("失败");
			}
			
			@Override
			public void onSuccess(ResponseInfo<String> responseInfo) {
				// TODO Auto-generated method stub
				Log.i("QQ", "qq---:"+responseInfo.result);
				try{
                    JSONObject jsonObject = new JSONObject(responseInfo.result);
                    String nickname=jsonObject.getString("nickname");
                    String gender=jsonObject.getString("gender");
                    String province=jsonObject.getString("province");
                    String city=jsonObject.getString("city");
                    String year=jsonObject.getString("year");
					String headImage=jsonObject.getString("figureurl_2");
					String result ="昵称："+nickname+"性别："+gender+"年龄："+year+"省份："+province+"城市："+city+"头像图片路径："+headImage;
					webView.loadUrl("javascript:javacalljsparam(" + "'"+result+"'"+ ")"); // 无参数调用
					SharedPreferenceUtils.put(context, "isLogin", false);
                } catch (JSONException e){
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
			}
		} );
	}

	@Override
	public void onError(UiError e) {
		Toast.makeText(context, R.string.auth_failure, Toast.LENGTH_SHORT).show();
	}

	@Override
	public void onCancel() {
		Toast.makeText(context, R.string.auth_cancel, Toast.LENGTH_SHORT).show();
	}

}