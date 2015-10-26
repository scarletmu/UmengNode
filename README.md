# UmengNodeSDK
Umeng push notification nodejs version.

Using ES6

## Usage
详细接口描述在官方文档 http://dev.umeng.com/push/android/api-doc#2
customizedcast推送未完全
### Android Example
**ATTENTION** 对照官方文档在info内添加自己所需要的信息,所提供为必须字段

	var Umeng = require('UmengNode');
	var android = new Umeng();
	android.initialize({
          platform: 'android',
          appKey: config.umeng.android.appKey,
          appMasterSecret: config.umeng.android.appSecret,
          production_mode: config.umeng.production_mode
    });
	var info = {
          timestamp: Date.now(),
          device_tokens: deviceToken,
          payload: {
		  //默认选择通知类型为Notification,需必填以下信息
            body: {
              "ticker": '通知栏的显示的文字',
              "title": '通知的标题',
              "text": '通知的内容',
			  ...//自行添加参数，默认after_open为go_app即打开APP		
            }
          }
        };
	//调用响应方法
	android.unicast(info, function (err, result) {
		...//回调处理					
    });
	
### iOS Example
**ATTENTION** 对照官方文档在info内添加自己所需要的信息,所提供为必须字段

	var Umeng = require('UmengNode');
	var ios = new Umeng();
	ios.initialize({
        platform: 'ios',
        appKey: config.umeng.ios.appKey,
        appMasterSecret: config.umeng.ios.appSecret,
        production_mode: config.umeng.production_mode
    });
	var info = {
        timestamp: Date.now(),
        device_tokens: deviceToken,
        payload: {
		aps": {"alert": '通知内容'}// 苹果必填字段
		}
    };
	//调用响应方法
	ios.unicast(info, function (err, result) {
		...//回调处理					
    });
### fileUpload
**文件上传接口**

	var Umeng = require('UmengNode');
	var file = new Umeng();
	file.initialize({
          appKey: config.umeng.android.appKey,
    });
	var info = {
        timestamp: Date.now()
    };
	file.fileupload(info,function(err,result){
		...//回调处理
	});
	
	返回结果
	{
		"ret":"SUCCESS/FAIL",
		"data": 
		{
			// 当"ret"为"SUCCESS"时
			"file_id":"xx" //再使用此file_id操作filecast

			// 当"ret"为"FAIL"时，包含参数如下:
			"error_code": "xx" //错误码详见官方附录I。
		}
	}
### Request callback(引用自官方)
	
	{
		"ret":"SUCCESS/FAIL", // 返回结果，"SUCCESS"或者"FAIL"
		"data": 
		{
		// 当"ret"为"SUCCESS"时,包含如下参数:
        // 当type为unicast、listcast或者customizedcast且alias不为空时:
        "msg_id":"xx" 
        // 当type为于broadcast、groupcast、filecast、customizedcast
        且file_id不为空的情况(任务)
        "task_id":"xx"
		// 当"ret"为"FAIL"时,包含如下参数:
		"error_code":"xx" // 错误码详见官方附录I。
		}  
	}

