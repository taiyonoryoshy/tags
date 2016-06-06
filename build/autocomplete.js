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

  var autocomplete = '.tag-input';
  var tags = require('./tags');

  return {
    init: function () {
      $(autocomplete).autocomplete({
        source: available_tags
      });

      this.trigger();
    },
    trigger: function () {
      $(autocomplete).on('autocompleteselect', function (e, ui) {
        console.log('autocompleteselect');
        tags.trigger('create_tag.tags');
        return false;
      });
    }
  };


})();