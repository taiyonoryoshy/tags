'use strict';


module.exports = (function () {
  return {
    input: null,
    popup_denied: null,
    popup_no_find: null,
    denied: function () {
      var template = require('./templates/popup_denied.jade'),
        that = this,
        $popup;

      require('./styles/popup_denied.styl');

      $('body').append(template());

      $popup = $(this.popup);

      $popup.fadeIn();

      $popup.position({
        my: 'left+10 top+10',
        at: 'right bottom',
        of: that.input
      });

    },
    no_find: function () {
      var template = require('./templates/popup_no_find.jade'),
        that = this,
        $popup;

      require('./styles/popup_no_find.styl');

      $('body').append(template());

      $popup = $(this.popup_no_find);

      $popup.fadeIn();

      $popup.position({
        my: 'left+10 top+10',
        at: 'right bottom',
        of: that.input
      });
    }
  };
})();