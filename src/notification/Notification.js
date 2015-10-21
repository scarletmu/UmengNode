/**
 * Created by Mu on 2015/9/22.
 */
"use strict";
var request = require('request');
var crypto = require('crypto');
function nativeConvertAscii(str) {
  var ascii = '';
  var charAscii;
  for(var i = 0; i != str.length; i++) {
    var code = Number(str[i].charCodeAt(0));
    if(code > 127) {
      charAscii = code.toString(16);
      charAscii = new String("0000").substring(charAscii.length, 4) + charAscii;
      ascii += "\\u" + charAscii;
    } else {
      ascii += str[i]
    }
  }
  return ascii;
}
function _sign(val){
  return crypto.createHash('md5').update(val).digest('hex');
}

var Notification = class Notification {
  constructor() {
    this._host = 'http://msg.umeng.com';
    this._uploadPath = '/upload';
    this._postPath = '/api/send';
    this._appMasterSecret = '';
    this._data = {
      'appkey': '',
      'timestamp': '',
      'type': '',
      // 'device_tokens': '',
      // 'alias': '',
      // 'file_id': '',
      // 'filter': '',
      // 'policy': null,
      'production_mode': ''
      // 'feedback': '',
      // 'description': '',
      // 'thirdparty_id': ''
    };
  }
  setAppMasterSecret(sec) {
    this._appMasterSecret = sec;
  }
  getData() {
    return this._data;
  }
  send(cb){
    // solve issure: http://bbs.umeng.com/thread-6928-1-1.html
    var data = JSON.stringify(this._data);
    data = nativeConvertAscii(data);
    console.log(data);
    var uri = this._host + this._postPath;
    var sign = _sign('POST' + uri + data + this._appMasterSecret);
    request({
      method:'POST',
      uri:uri+'?sign='+sign,
      body:data,
      headers: {
        "content-type": "application/json",
        "Content-Length": data.length
      }
    },cb);
  }
  upload(cb){
    var data = JSON.stringify(this._data);
    var uri = this._host+this._uploadPath;
    var sign = _sign('POST' + uri + data + this._appMasterSecret);
    request({
      method:'POST',
      uri:uri+'?sign='+sign,
      body:data,
      headers: {
        "content-type": "application/json",
        "Content-Length": data.length
      }
    },cb);
  }
};

module.exports = Notification;
