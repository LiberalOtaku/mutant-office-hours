(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = [];
  function AuthController() {
    var vm = this;
  }
})();
