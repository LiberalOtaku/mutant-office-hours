(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$firebaseAuth', '$state', 'authService'];
  function AuthController($firebaseAuth, $state, authService) {
    var vm = this;
    var auth = $firebaseAuth();

    vm.register = register;
    vm.login = login;
    vm.logout = logout;

    vm.user = {
      email: '',
      password: ''
    };

    function register(user) {
      authService.register(user);
    }

    function login(user) {
      return authService.login(user);
    }

    function logout() {
      authService.logout();
    }
  }
})();
