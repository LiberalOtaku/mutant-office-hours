(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .directive('myAuthForm', myAuthForm);

  function myAuthForm() {
    return {
      restrict: 'AE',
      templateUrl: 'app/auth/directives/authForm.html',
      controller: AuthFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        formName: '@',
        formSubmit: '&',
        formError: '='
      }
    };
  }

  AuthFormController.$inject = [];
  function AuthFormController() {
    var vm = this;

    vm.user = {
      email: '',
      password: ''
    };
  }
})();
