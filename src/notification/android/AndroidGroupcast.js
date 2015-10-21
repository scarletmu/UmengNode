/**
 * Created by Mu on 2015/9/22.
 */
"use strict";
var AndroidNotification = require('../AndroidNotification');

var AndroidGroupcast = class AndroidGroupcast extends AndroidNotification{
  constructor(){
    super();
    this._data['type'] = 'groupcast';
    this._data['filter'] = null;
  }
};

module.exports = AndroidGroupcast;