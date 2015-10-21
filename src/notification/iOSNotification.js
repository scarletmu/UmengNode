/**
 * Created by Mu on 2015/9/22.
 */
"use strict";
var Notification = require('./Notification');

var iOSNotification = class iOSNotification extends Notification{
  constructor(){
    super();
    this._data['payload'] = {
      'aps': {
        'alert': ''
        // 'badge': 0,
        // 'sound': '',
        // 'content-available': 0,
        // 'category': ''
      }
      // 'foo': 'bar'
    };
  }
};

module.exports = iOSNotification;
