/**
 * Created by Mu on 2015/9/22.
 */
"use strict";
var Notification = require('./Notification');

var AndroidNotification = class AndroidNotification extends Notification{
  constructor() {
    super();
    this._data['payload'] =
    {
      'display_type': 'notification',
      'body': {
        'ticker': '',
        'title': '',
        'text': '',
        // 'icon': '',
        // 'largeIcon': '',
        'play_vibrate': 'true',
        'play_lights': 'true',
        'play_sound': 'true',
        'after_open': ''
        // 'url': '',
        // 'activity': '',
        // 'custom': ''
      }
      // 'extra': {
      // 	'foo': 'bar'
      // }};
    };
  }
};

module.exports = AndroidNotification;
