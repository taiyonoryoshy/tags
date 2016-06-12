'use strict';
//@TODO: change data false to remove data
module.exports = (function () {
  var input = 'input.tag-input',
    url = 'index.php';

  return {
    init: function () {
      var tags = require('./tags');
      $(input).autocomplete({
        source: function (request, response) {
          $.get(
            url,
            {
              label: request.term,
              count: tags.get_count_terms_by_label(request.term)
            },
            function (data, text_status, jq_xhr) {
              response($.parseJSON(data));
            });
        },
        open: function (e, ui) {
          $(this).data('autocomplete-open', true);
        },
        close: function (e, ui) {
          $(this).data('autocomplete-open', false);
        },
        select: function (e, ui) {
          $(this).trigger('create_tag.tags', {value: ui.item.label});
          return false;
        }
      });
    }
  };


})();