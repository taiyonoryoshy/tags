'use strict';

module.exports = (function () {
  var url = 'index.php',
    dropdown = 'ul.ui-autocomplete',
    $input;

  return {
    input: null,
    allow_new: null,
    init: function () {
      var tags = require('./tags'),
        that = this;

      $input = $(this.input);

      $input.autocomplete({
        source: function (request, response) {
          $.get(
            url,
            {
              label: request.term,
              count: tags._get_count_terms_by_label(request.term)
            },
            function (data, text_status, jq_xhr) {
              var popup;

              data = $.parseJSON(data);

              if (!that.allow_new && data.length === 0 && !$input.data('popup-denied-open')) {
                popup = require('./popup');
                popup.no_find();
              }
              response(data);
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