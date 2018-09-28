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
	private static final int SCALE = 5;// 照片缩小比例

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

	private String imageName;
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
			imageName=String.valueOf(System.currentTimeMillis());
			showPicturePicker();
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
			switch (requestCode) {
			case TAKE_PICTURE:
				// 将保存在本地的图片取出并缩小后显示在界面上
				String imagePath=Environment.getExternalStorageDirectory() + "/"+imageName+".jpg";
				Bitmap bitmap = BitmapFactory.decodeFile(imagePath);
				Bitmap newBitmap = ImageTools.zoomBitmap(bitmap,bitmap.getWidth() / SCALE, bitmap.getHeight() / SCALE);
				// 由于Bitmap内存占用较大，这里需要回收内存，否则会报out of memory异常
				bitmap.recycle();
				
	            Log.i("tag", "--TAKE_PICTURE----imagePath--"+imagePath);
	            webView.loadUrl("javascript:javacalljsparam(" + "'"+imagePath+"'"+ ")"); // 无参数调用
				ImageTools.savePhotoToSDCard(newBitmap, Environment.getExternalStorageDirectory().getAbsolutePath(),String.valueOf(System.currentTimeMillis()));
				break;

			case CHOOSE_PICTURE:
				ContentResolver resolver = getContentResolver();
				// 照片的原始资源地址
				Uri originalUri = data.getData();		
				try {
					// 使用ContentProvider通过URI获取原始图片
					Bitmap photo = MediaStore.Images.Media.getBitmap(resolver,originalUri);
		            //这里开始的第二部分，获取图片的路径：
		            String[] proj = {MediaStore.Images.Media.DATA};
		            //好像是Android多媒体数据库的封装接口，具体的看Android文档
		            Cursor cursor = managedQuery(originalUri, proj, null, null, null); 
		            //按我个人理解 这个是获得用户选择的图片的索引值
		            int column_index = cursor.getColumnIndexOrThrow(MediaStore.Images.Media.DATA);
		            //将光标移至开头 ，这个很重要，不小心很容易引起越界
		            cursor.moveToFirst();
		            //最后根据索引值获取图片路径
		            String path = cursor.getString(column_index);
		            
		            Log.i("tag", "path---:"+path);
					webView.loadUrl("javascript:javacalljsparam(" + "'"+path+"'"+ ")"); // 无参数调用
					if (photo != null) {
						// 释放原始图片占用的内存，防止out of memory异常发生
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
		builder.setTitle("图片来源");
		builder.setNegativeButton("取消", null);
		builder.setItems(new String[] { "拍照", "相册" },
				new DialogInterface.OnClickListener() {
					// 类型码
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
							// 指定照片保存路径（SD卡），image.jpg为一个临时文件，每次拍照后这个图片都会被替换
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
