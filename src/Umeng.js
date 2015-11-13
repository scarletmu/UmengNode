/**
 * Created by Mu on 2015/9/22.
 */
"use strict";
var Android = require('./notification/android');
var IOS = require('./notification/ios');
var UploadFile = require('./notification/UploadFile');
var _ = require('lodash');

var Umeng = class Umeng{
  constructor(){
    this._platform =  '';
    this._appKey= '';
    this._appMasterSecret= '';
    this._content= '';
    this._aliseType= '';
    this._iosAliseType= '';
    this._androidAliseType= '';
    this._productionMode= '';
    this.broadcast= null;
    this.groupcast= null;
    this.unicast= null;
    this.listcast = null;
    this.customizedcast= null;
  }
  initialize(option){
    if(!option) throw new Error('lose option.');

    if(!option.platform && option.platform !== 'ios' && option.platform !== 'android') {
      throw new Error('platform must be ios or android.');
    }
    this._platform = option.platform;
    this._appKey = option.appKey;
    this._appMasterSecret = option.appMasterSecret;
    this._content = option.content;
    this._aliseType = option.aliseType;
    this._iosAliseType = option.iosAliseType;
    this._androidAliseType = option.androidAliseType;
    this._productionMode = option.production_mode || 'false';

    if(this._platform === 'ios') {
      this._prepareIOS();
    } else if(this._platform === 'android') {
      this._prepareAndroid();
    }
  }
  _prepareNotification(notification, info, cb) {
    notification.setAppMasterSecret(this._appMasterSecret);
    var data = notification.getData();
    data.appkey = this._appKey;
    data.production_mode = this._productionMode;
    _.merge(data, info);
    notification.send(cb);
  }
  _prepareUpload(upload, info, cb) {
    upload.setAppMasterSecret(this._appMasterSecret);
    var data = upload.getData();
    data.appkey = this._appKey;
    data.production_mode = this._productionMode;
    _.merge(data, info);
    upload.upload(cb);
  }
  _prepareIOS(){
    this.broadcast = function(info, cb) {
      this._prepareNotification(new IOS.IOSBroadcast, info, cb);
    };
    this.groupcast = function(info, cb) {
      this._prepareNotification(new IOS.IOSGroupcast, info, cb);
    };
    this.unicast = function(info, cb) {
      this._prepareNotification(new IOS.IOSUnicast, info, cb);
    };
    this.listcast = function(info,cb){
      this._prepareNotification(new IOS.IOSListcast,info,cb);
    };
    this.customizedcast = function(info, cb) {
      var notification = new IOS.IOSCustomizedcast;
      var aliseType = this._aliseType || this._iosAliseType;
      notification.setAliasType(aliseType);
      this._prepareNotification(notification, info, cb);
    };
    this.filecast = function(info,cb){
      this._prepareNotification(new IOS.IOSFilecast,info,cb);
    };
    this.fileupload = function(info,cb){
      var upload = new UploadFile;
      var content = this._content;
      upload.setContent(content);
      this._prepareUpload(upload,info,cb);
    }
  }
  _prepareAndroid() {
    this.broadcast = function(info, cb) {
      this._prepareNotification(new Android.AndroidBroadcast, info, cb);
    };
    this.groupcast = function(info, cb) {
      this._prepareNotification(new Android.AndroidGroupcast, info, cb);
    };
    this.unicast = function(info, cb) {
      this._prepareNotification(new Android.AndroidUnicast, info, cb);
    };
    this.listcast = function(info,cb){
      this._prepareNotification(new Android.AndroidListcast, info, cb);
    };
    this.customizedcast = function(info, cb) {
      var notification = new Android.AndroidCustomizedcast;
      var aliseType = this._aliseType || this._androidAliseType;
      notification.setAliasType(aliseType);
      this._prepareNotification(notification, info, cb);
    };
    this.filecast = function(info,cb){
      this._prepareNotification(new Android.AndroidFilecast,info,cb);
    };
    this.fileupload = function(info,cb){
      var upload = new UploadFile;
      var content = this._content;
      upload.setContent(content);
      this._prepareUpload(upload,info,cb);
    }
  }
};

module.exports = Umeng;