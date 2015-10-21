/**
 * Created by Mu on 2015/9/22.
 */
"use strict";
var iOSNotification = require('../iOSNotification');

var iOSListcast = class iOSListcast extends iOSNotification{
  constructor(){
    super();

    this._data['type'] = 'listcast';
    this._data['device_tokens'] = '';
  }
};

module.exports = iOSListcast;