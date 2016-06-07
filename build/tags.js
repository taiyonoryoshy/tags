'use strict';

require('./styles/main.styl');

module.exports = (function () {
  var input = 'input.tag-input',
    tags = '.tags',
    tag = '.tag';

  return {
    init: function () {
      var template = require('./templates/main.jade'),
        autocomplete = require('./autocomplete');

      $('body').html(template());

      this.trigger();
      this.event();

      autocomplete.init();
    },
    trigger: function () {
      var $input = $(input);

      $input.on('keydown', function (e) {
        if (e.which === $.ui.keyCode.ENTER) {
          if (!$input.data('autocomplete-open')) {
            $(this).trigger('create_tag.tags', {value: $(this).val()});
          }
        }
        if (e.which === $.ui.keyCode.BACKSPACE && $(this).val() === '') {
          $(this).trigger({
            type: 'remove_tag.tags',
            tags_tag: $(tag).last()
          });
        }
      });

      $(tags).on('click', '.tag-remove a', function (e) {
        $(this).trigger({
          type: 'remove_tag.tags',
          tags_tag: $(this).closest(tag)
        });
        return false;
      });
    },
    event: function () {
      var $tags = $(tags),
        $input = $(input),
        that = this;

      $tags.on({
        'create_tag.tags': function (e, data) {
          that.create_tag($input, data.value);
        },
        'remove_tag.tags': function (e) {
          that.remove_tag(e.tags_tag);
        }
      });
    },
    create_tag: function ($input, value) {
      var template = require('./templates/tag.jade');

      $(template({value: value})).appendTo('.tag-cont');
      $input.val('');
    },
    remove_tag: function ($tag) {
      $tag.hide('blind', {direction: 'left'}, 'normal', function () {
        $(this).remove();
      });
    }
  };
})();