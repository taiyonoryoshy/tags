require('./styles/main.styl');

var App = (function () {
  var someArray = [];
  return {
    init: function () {
      var Profile = require('./Profile');
      var Portfolio = require('./Portfolio');
      Profile.init();
      Portfolio.init();
    }
  }
})();

App.init();