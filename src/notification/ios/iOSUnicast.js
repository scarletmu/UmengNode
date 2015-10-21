/**
 * Created by Mu on 2015/9/22.
 */
"use strict";
var iOSNotification = require('../iOSNotification');

var iOSUnicast = class iOSUnicast extends iOSNotification{
  constructor() {
    super();

    this._data['type'] = 'unicast';
    this._data['device_tokens'] = '';
  }
};

module.exports = iOSUnicast;