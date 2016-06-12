'use strict';

module.exports = (function () {
  var input = 'input.tag-input',
    url = 'index.php',
    dropdown = 'ul.ui-autocomplete',
    $input;

  return {
    init: function () {
      var tags = require('./tags');

      $input = $(input);

      $input.autocomplete({
        source: function (request, response) {
          $.get(
            url,
            {
              label: request.term,
              count: tags._get_count_terms_by_label(request.term)
            },
            function (data, text_status, jq_xhr) {
              response($.parseJSON(data));
            });
        },
        select: function (e, ui) {
          $(this).trigger('create_tag.tags', {value: ui.item.label});
          return false;
        }
      });

      this.event();
    },
    event: function () {
      $(dropdown).on({
        menublur: function (e, ui) {
          $input.removeData('autocomplete-open');
        },
        menufocus: function (e, ui) {
          $input.data('autocomplete-open', true);
        }
      });
    }
  };


})();