(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .directive('myErrorVarMessage', myErrorVarMessage);

  function myErrorVarMessage() {
    return {
      restrict: 'AE',
      templateUrl: 'app/auth/directives/errorMessage.html',
      controller: ErrorVarMessageController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        condition: '=',
        message: '='
      }
    };
  }

  ErrorVarMessageController.$inject = [];
  function ErrorVarMessageController() {
    var vm = this;
  }
})();
