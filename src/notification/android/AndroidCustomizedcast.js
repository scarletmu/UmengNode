/**
 * Created by Mu on 2015/9/22.
 */
"use strict";
var AndroidNotification = require('../AndroidNotification');

var AndroidCustomizedcast = class AndroidCustomizedcast extends AndroidNotification{
  constructor(){
    super();
    this._data['type'] = 'customizedcast';
    this._data['alias_type'] = '';
  }
  setAliasType(type) {
    this._data['alias_type'] = type;
  }
};

module.exports = AndroidCustomizedcast;