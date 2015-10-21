/**
 * Created by Mu on 2015/9/22.
 */
"use strict";
var AndroidNotification = require('../AndroidNotification');

var AndroidBroadcast = class AndroidBoardcast extends AndroidNotification{
  constructor(){
    super();

    this._data['type'] = 'broadcast';
  }
};

module.exports = AndroidBroadcast;