'use strict';

module.exports = (function () {
  var available_tags = [
    'java',
    'javascript',
    'actionscript',
    'c++',
    'scala',
    'python',
    'php',
    'c',
    'c#'
  ];

  var input = 'input.tag-input';

  return {
    init: function () {
      $(input).autocomplete({
        source: available_tags,
        open: function (e, ui) {
          $(this).data('autocomplete-open', true);
        },
        close: function (e, ui) {
          $(this).data('autocomplete-open', false);
        }
      });

      this.trigger();
    },
    trigger: function () {
      var $input = $(input);
      $input.on('autocompleteselect', function (e, ui) {
        $(this).trigger('create_tag.tags', {value: ui.item.label});
        return false;
      });
    }
  };


})();