'use strict';

module.exports = (function () {
  var tag_cont = '.tag-cont',
    $tag_cont;

  return {
    init: function () {
      $tag_cont = $(tag_cont);

      $tag_cont.sortable().disableSelection();
    }
  };

})();