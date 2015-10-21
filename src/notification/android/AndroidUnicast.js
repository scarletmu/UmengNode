/**
 * Created by Mu on 2015/9/22.
 */
"use strict";
var AndroidNotification = require('../AndroidNotification');

var AndroidUnicast = class AndroidUnicast extends AndroidNotification {
  constructor(){
    super();

    this._data['type'] = 'unicast';
    this._data['device_tokens'] = '';
  }
};

module.exports = AndroidUnicast;
