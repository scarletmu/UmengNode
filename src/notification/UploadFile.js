/**
 * Created by Mu on 2015/9/23.
 */
"use strict";
var Notification = require('./Notification');

var UploadFile = class UploadFile extends  Notification{
  constructor(){
    super();
    this._data['content'] = '';
  }
  setContent(content){
    this._data['content'] = content.join("\n");
  }
};

module.exports = UploadFile;