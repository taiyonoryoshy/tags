'use strict';

module.exports = (function () {
  return {
    input: null,
    popup_denied: null,
    popup_no_find: null,
    denied: function () {
      var template = require('./templates/popup_denied.jade');

      require('./styles/popup_denied.styl');

      this.popup(this.popup_denied, this.input, template);
    },
    no_find: function () {
      var template = require('./templates/popup_no_find.jade');

      require('./styles/popup_no_find.styl');

      this.popup(this.popup_no_find, this.input, template);
    },
    popup: function (popup, input, template) {
      var $popup;

      $('body').append(template());

      $popup = $(popup);

      $popup.fadeIn();

      $popup.position({
        my: 'left+10 top+10',
        at: 'right bottom',
        of: input
      });

      if (popup === this.popup_denied) {
        $(input).data('popup-denied-open', true);
      }
    }
  };
})();