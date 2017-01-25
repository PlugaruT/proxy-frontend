(function () {
  'use strict';

  angular
    .module('proxyFrontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(Restangular) {
    var vm = this;
    activate();

    vm.user = {};


    function activate() {
      getUserList()
    }


    vm.deleteUser = function (user) {
      user.doDELETE();
      _.remove(vm.userList, user)
    };

    vm.createUser = function () {
      var user = Restangular.restangularizeElement(undefined, vm.user, 'users');
      user.post().then(function (response) {
        vm.userList.splice(0, 0, response)
      });
    };

    function getUserList() {
      Restangular.service('users').getList().then(function (response) {
        vm.userList = response;
      });
    }
  }
})();
