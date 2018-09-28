package com.example.takephoto;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.ContentResolver;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Log;
import android.view.KeyEvent;
import android.webkit.WebView;
import android.widget.Toast;

public class MainActivity extends Activity {
	private WebView webView;
	private static final int TAKE_PICTURE = 0;
	private static final int CHOOSE_PICTURE = 1;
	private static final int SCALE = 5;// ��Ƭ��С����

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

	private String imageName;
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
			imageName=String.valueOf(System.currentTimeMillis());
			showPicturePicker();
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
			switch (requestCode) {
			case TAKE_PICTURE:
				// �������ڱ��ص�ͼƬȡ������С����ʾ�ڽ�����
				String imagePath=Environment.getExternalStorageDirectory() + "/"+imageName+".jpg";
				Bitmap bitmap = BitmapFactory.decodeFile(imagePath);
				Bitmap newBitmap = ImageTools.zoomBitmap(bitmap,bitmap.getWidth() / SCALE, bitmap.getHeight() / SCALE);
				// ����Bitmap�ڴ�ռ�ýϴ�������Ҫ�����ڴ棬����ᱨout of memory�쳣
				bitmap.recycle();
				
	            Log.i("tag", "--TAKE_PICTURE----imagePath--"+imagePath);
	            webView.loadUrl("javascript:javacalljsparam(" + "'"+imagePath+"'"+ ")"); // �޲�������
				ImageTools.savePhotoToSDCard(newBitmap, Environment.getExternalStorageDirectory().getAbsolutePath(),String.valueOf(System.currentTimeMillis()));
				break;

			case CHOOSE_PICTURE:
				ContentResolver resolver = getContentResolver();
				// ��Ƭ��ԭʼ��Դ��ַ
				Uri originalUri = data.getData();		
				try {
					// ʹ��ContentProviderͨ��URI��ȡԭʼͼƬ
					Bitmap photo = MediaStore.Images.Media.getBitmap(resolver,originalUri);
		            //���￪ʼ�ĵڶ����֣���ȡͼƬ��·����
		            String[] proj = {MediaStore.Images.Media.DATA};
		            //������Android��ý�����ݿ�ķ�װ�ӿڣ�����Ŀ�Android�ĵ�
		            Cursor cursor = managedQuery(originalUri, proj, null, null, null); 
		            //���Ҹ������ ����ǻ���û�ѡ���ͼƬ������ֵ
		            int column_index = cursor.getColumnIndexOrThrow(MediaStore.Images.Media.DATA);
		            //�����������ͷ ���������Ҫ����С�ĺ���������Խ��
		            cursor.moveToFirst();
		            //����������ֵ��ȡͼƬ·��
		            String path = cursor.getString(column_index);
		            
		            Log.i("tag", "path---:"+path);
					webView.loadUrl("javascript:javacalljsparam(" + "'"+path+"'"+ ")"); // �޲�������
					if (photo != null) {
						// �ͷ�ԭʼͼƬռ�õ��ڴ棬��ֹout of memory�쳣����
						photo.recycle();
					}
				} catch (FileNotFoundException e) {
					e.printStackTrace();
				} catch (IOException e) {
					e.printStackTrace();
				}
				break;
			default:
				break;
			}
		}
	}

	public void showPicturePicker() {
		AlertDialog.Builder builder = new AlertDialog.Builder(MainActivity.this);
		builder.setTitle("ͼƬ��Դ");
		builder.setNegativeButton("ȡ��", null);
		builder.setItems(new String[] { "����", "���" },
				new DialogInterface.OnClickListener() {
					// ������
					int REQUEST_CODE;
					@Override
					public void onClick(DialogInterface dialog, int which) {
						switch (which) {
						case TAKE_PICTURE:
							Uri imageUri = null;
							String fileName = null;
							Intent openCameraIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
							REQUEST_CODE = TAKE_PICTURE;
							fileName = imageName+".jpg";
							imageUri = Uri.fromFile(new File(Environment.getExternalStorageDirectory(), fileName));
							// ָ����Ƭ����·����SD������image.jpgΪһ����ʱ�ļ���ÿ�����պ����ͼƬ���ᱻ�滻
							openCameraIntent.putExtra(MediaStore.EXTRA_OUTPUT,imageUri);
							startActivityForResult(openCameraIntent,REQUEST_CODE);
							break;

						case CHOOSE_PICTURE:
							Intent openAlbumIntent = new Intent(Intent.ACTION_GET_CONTENT);
							REQUEST_CODE = CHOOSE_PICTURE;
							openAlbumIntent.setDataAndType(MediaStore.Images.Media.EXTERNAL_CONTENT_URI,"image/*");
							startActivityForResult(openAlbumIntent,REQUEST_CODE);
							break;

						default:
							break;
						}
					}
				});
		builder.create().show();
	}
}
