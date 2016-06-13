'use strict';

$(function () {
  require('jquery-ui');
  require('jquery-ui/themes/base/jquery-ui.css');

  var allow_new = true,
    input = 'input.tag-input',
    popup_denied = '.tags-popup-denied',
    popup_no_find = '.tags-popup-no-find';


  var tags = require('./tags');
  var autocomplete = require('./autocomplete');
  var popup = require('./popup');

  tags.allow_new = allow_new;
  tags.input = input;
  tags.popup_denied = popup_denied;
  tags.popup_no_find = popup_no_find;
  autocomplete.input = input;
  autocomplete.allow_new = allow_new;
  popup.input = input;
  popup.popup_denied = popup_denied;
  popup.popup_no_find = popup_no_find;

  tags.init();

});
