'use strict';

module.exports = (function () {
  return {
    init: function () {
      var Profile = require('./Profile');
      var Portfolio = require('./Portfolio');
      require('./styles/main.styl');

      var template = require('./templates/main.jade');
      var options = {
        title: 'super title',
        items: [
          {text: 'qweqweqw', href: '#eggs'},
          {text: 'sdf', href: '#mesdfat'},
          {text: 'cvkbnkjcvbnkj', href: '#bamboo'}
        ]
      };
      document.body.innerHTML = template(options);

      Profile.init();
      Portfolio.init();
    }
  }
})();