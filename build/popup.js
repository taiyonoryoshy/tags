'use strict';

require('./styles/popup.styl');

module.exports = (function () {
  return {
    input: null,
    popup: null,
    init: function () {
      var template = require('./templates/popup.jade');

      $('body').append(template());

      var $popup = $(this.popup);

      $popup.fadeIn();

      var that = this;

      $popup.position({
        my: 'left+10 top+10',
        at: 'right bottom',
        of: that.input
      });

    }
  };
})();