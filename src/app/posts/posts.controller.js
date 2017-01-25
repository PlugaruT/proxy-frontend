(function () {
  'use strict';

  angular
    .module('proxyFrontend')
    .controller('PostListController', PostListController);

  /** @ngInject */
  function PostListController(Restangular) {
    var vm = this;
    activate();

    function activate() {
    }

  }
})();
