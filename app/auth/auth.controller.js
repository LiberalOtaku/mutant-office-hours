(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$state', 'authService'];
  function AuthController($state, authService) {
    var vm = this;

    vm.register = register;
    vm.login = login;
    vm.error = null;
    vm.sendPasswordResetEmail = sendPasswordResetEmail;

    vm.user = {
      email: '',
      password: ''
    };

    function register(user) {
      return authService.register(user)
        .then(function() {
          vm.login(user);
        })
        .then(function() {
          authService.sendWelcomeEmail(user.email);
        })
        .catch(function(error) {
          vm.error = error;
        });
    }

    function login(user) {
      return authService.login(user)
        .then(function() {
          console.log('Logged in using ' + user.email + '!');
          $state.go('mutantList');
        })
        .catch(function(error) {
          vm.error = error;
        });
    }

    function sendPasswordResetEmail(email) {
      return authService.sendPasswordResetEmail(email)
        .then(function() {
          console.log('Email sent to ' + email + '!');
        });
    }
  }
})();
