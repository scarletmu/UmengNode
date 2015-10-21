/**
 * Created by Mu on 2015/9/22.
 */
"use strict";
var AndroidNotification = require('../AndroidNotification');

var AndroidFilecast = class AndroidFilecast extends AndroidNotification{
  constructor(){
    super();

    this._data['file_id'] = '';
  }
};

module.exports = AndroidFilecast;