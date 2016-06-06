'use strict';

require('./styles/main.styl');

module.exports = (function () {
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
      var $input = $('input.tag-input');

      $input.on('keydown', function (e) {
        if (e.which === $.ui.keyCode.ENTER) {
          $(this).trigger('create_tag.tags');
        }
        if (e.which === $.ui.keyCode.BACKSPACE && $(this).val() === '') {
          $(this).trigger({
            type: 'remove_tag.tags',
            tags_tag: $('.tag').last()
          });
        }
      });

      $('.tags').on('click', '.tag-remove a', function (e) {
        $(this).trigger({
          type: 'remove_tag.tags',
          tags_tag: $(this).closest('.tag')
        });
        return false;
      });
    },
    event: function () {
      var $tags = $('.tags'),
        $input = $('input.tag-input'),
        that = this;

      $tags.on({
        'create_tag.tags': function (e) {
          that.create_tag($input);
        },
        'remove_tag.tags': function (e) {
          that.remove_tag(e.tags_tag);
        }
      });
    },
    create_tag: function ($input) {
      var tag = require('./templates/tag.jade');

      $(tag({value: $input.val()})).appendTo('.tag-cont');
      $input.val('');
    },
    remove_tag: function ($tag) {
      $tag.hide('blind', {direction: 'left'}, 'normal', function () {
        $(this).remove();
      });
    }
  };
})();