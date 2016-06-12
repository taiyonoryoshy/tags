'use strict';

require('./styles/main.styl');

module.exports = (function () {
  var input = 'input.tag-input',
    tags = '.tags',
    tag = '.tag',
    tag_text = '.tag span',
    url = 'allow.php',
    text_denied = 'Tag create denied',
    $input;

  return {
    allow_new: true,
    init: function () {
      var template = require('./templates/main.jade'),
        autocomplete = require('./autocomplete');

      $('body').html(template());

      $input = $(input);

      this.trigger();
      this.event();

      autocomplete.init();
    },
    trigger: function () {
      var that = this;

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
        that = this;

      $tags.on({
        'create_tag.tags': function (e, data) {
          that.create_tag(data.value);
        },
        'remove_tag.tags': function (e) {
          that.remove_tag(e.tags_tag);
        }
      });
    },
    create_tag: function (value) {
      var that = this;
      var template = require('./templates/tag.jade');

      if (this.allow_new) {
        this._create(template, value);
      } else {
        $.ajax(url, {
            async: false,
            data: {
              label: value,
              count: that._get_count_terms_by_label(value)
            },
            success: function (data, text_status, jq_xhr) {
              if ($.parseJSON(data)) {
                that._create(template, value);
              } else {
                console.log(text_denied);
              }
              $input.autocomplete('close');
            }
          }
        );
      }
    },
    remove_tag: function ($tag) {
      $tag.hide('blind', {direction: 'left'}, 'normal', function () {
        $(this).remove();
      });
    },
    _get_count_terms_by_label: function (label) {
      var $tag_text = $(tag_text),
        count = 0;

      $tag_text.each(function (i, el) {
        if ($(el).text() === label) {
          count++;
        }
      });
      return count;
    },
    _create: function (template, value) {
      $(template({value: value})).appendTo('.tag-cont');
      $input.val('');
    }
  };
})();