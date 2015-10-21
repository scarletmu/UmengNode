"use strict";
var iOSNotification = require('../iOSNotification');

var iOSBroadcast = class iOSBroadcast extends iOSNotification{
  constructor(){
    super();

    this._data['type'] = 'broadcast';
  }
};

module.exports = iOSBroadcast;