'use strict';

$(function () {
  require('jquery-ui');
  require('jquery-ui/themes/base/jquery-ui.css');

  var allow_new = false,
    input = 'input.tag-input',
    popup_selector = '.tags-popup';


  var tags = require('./tags');
  var autocomplete = require('./autocomplete');
  var popup = require('./popup');

  tags.allow_new = allow_new;
  tags.input = input;
  tags.popup = popup_selector;
  autocomplete.input = input;
  popup.input = input;
  popup.popup = popup_selector;

  tags.init();

});
