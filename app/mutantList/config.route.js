(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];
  function configFunction($stateProvider) {
    $stateProvider.state('mutantList', {
      url: '/mutantlist',
      templateUrl: 'app/mutantList/mutantList.html',
      controller: 'MutantListController',
      controllerAs: 'vm',
      resolve: {
        user: resolveUser
      }
    });
  }

  resolveUser.$inject = ['$state', 'authService']
  function resolveUser($state, authService) {
    return authService.auth.$requireSignIn();
  }
})();
