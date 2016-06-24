(function() {
  'use strict';

  angular
    .module('mutantApp.layout')
    .directive('myNavbar', myNavbar);

  function myNavbar() {
    return {
      restrict: 'AE',
      templateUrl: 'app/layout/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm'
    };
  }

  NavbarController.$inject = ['$state', 'authService']
  function NavbarController($state, authService) {
    var vm = this;

    vm.logout = logout;
    vm.isLoggedIn = authService.isLoggedIn;

    function logout() {
      authService.logout();
      $state.go('home');
    }
  }
})();
