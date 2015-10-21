/**
 * Created by Mu on 2015/9/22.
 */
"use strict";
var AndroidNotification = require('../AndroidNotification');

var AndroidListcast = class AndroidListcast extends AndroidNotification{
  constructor(){
    super();

    this._data['type'] = 'listcast';
    this._data['device_tokens'] = '';
  }
};

module.exports = AndroidListcast;