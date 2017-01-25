(function() {
  'use strict';

  angular
    .module('proxyFrontend')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController as vm',
      });

    $urlRouterProvider.otherwise('/');
  }

})();
