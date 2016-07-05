(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];
  function configFunction($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'app/auth/register.html',
        controller: 'AuthController',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/auth/login.html',
        controller: 'AuthController',
        controllerAs: 'vm'
      })
      .state('resetPassword', {
        url: '/reset',
        templateUrl: 'app/auth/resetPassword.html',
        controller: 'AuthController',
        controllerAs: 'vm'
      });
  }
})();
