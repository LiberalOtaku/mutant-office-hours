(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .directive('myErrorMessage', myErrorMessage);

  function myErrorMessage() {
    return {
      restrict: 'AE',
      templateUrl: 'app/auth/directives/errorMessage.html',
      controller: ErrorMessageController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        condition: '=',
        message: '@'
      }
    };
  }

  ErrorMessageController.$inject = [];
  function ErrorMessageController() {
    var vm = this;
  }
})();
