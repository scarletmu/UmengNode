/**
 * Created by Mu on 2015/9/22.
 */
"use strict";
var iOSNotification = require('../iOSNotification');

var iOSGroupcast = class iOSGroupcast extends iOSNotification{
  constructor(){
    super();

    this._data['type'] = 'groupcast';
    this._data['filter'] = null;
  }
};

module.exports = iOSGroupcast;