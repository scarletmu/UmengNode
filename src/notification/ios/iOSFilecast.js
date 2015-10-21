/**
 * Created by Mu on 2015/9/22.
 */
"use strict";
var iOSNotification = require('../iOSNotification');

var iOSFilecast = class iOSFilecast extends iOSNotification{
  constructor(){
    super();

    this._data['file_id'] = '';
  }
};

module.exports = iOSFilecast;