(function () {
  'use strict';

  angular
    .module('proxyFrontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($mdDialog, Restangular) {
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

    vm.showEditUserPrompt = function (ev, user) {
      var confirm = $mdDialog.prompt()
        .title('Change First Name')
        .initialValue(user.first_name)
        .targetEvent(ev)
        .ok('Save')
        .cancel('Cancel');

      $mdDialog.show(confirm).then(function (result) {
        user.first_name = result;
        user.put();
      });
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
