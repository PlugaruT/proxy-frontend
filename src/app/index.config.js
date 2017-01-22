(function() {
  'use strict';

  angular
    .module('proxyFrontend')
    .config(config);

  /** @ngInject */
  function config($logProvider, RestangularProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    // Set restangular options
    RestangularProvider.setBaseUrl('http://localhost:8000/api/v1/');
    RestangularProvider.setRequestSuffix('/');
    RestangularProvider.setDefaultHttpFields({spinner: true});

  }

})();
