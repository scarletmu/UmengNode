/**
 * Created by Mu on 2015/9/22.
 */
"use strict";
var iOSNotification = require('../iOSNotification');

var iOSCustomizedcast = class iOSCustomizedcast extends iOSNotification{
  constructor(){
    super();
    this._data['type'] = 'customizedcast';
    this._data['alias_type'] = '';
  }
  setAliasType(type) {
    this._data['alias_type'] = type;
  }
};