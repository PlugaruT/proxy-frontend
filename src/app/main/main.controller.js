(function() {
  'use strict';

  angular
    .module('proxyFrontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(Restangular) {

    activate();

    Restangular.service('shoppers').getList().then(function (respone) {
      console.log('asdas')
    });

    function activate() {
    }
  }
})();
