(function() {
  'use strict';

  angular
    .module('mutantApp', [
      // Angular modules
      'ui.router',

      // Third-party modules
      'firebase',

      // Custom modules
      'mutantApp.home',
      'mutantApp.mutantList',
      'mutantApp.auth',
      'mutantApp.core',
      'mutantApp.layout'
    ])
    .config(configFunction)
    .run(runFunction);

  configFunction.$inject = ['$urlRouterProvider'];
  function configFunction($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

  runFunction.$inject = ['$rootScope', '$state', 'authService', 'hashService'];
  function runFunction($rootScope, $state, authService, hashService) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      // We can catch the error thrown when the $requireAuth promise is rejected
      // and redirect the user back to the login page
      if (error === 'AUTH_REQUIRED') {
        $state.go('login');
      }
    });

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      // get avatar on state change
      if (authService.isLoggedIn() && (toState.name === "mutantList")) {
        $('ul.menu img').attr({ "src": "https://www.gravatar.com/avatar/" + hashService.md5(authService.isLoggedIn().email) + "?s=40&d=monsterid&f=y" });
      }
    });
  }
})();
