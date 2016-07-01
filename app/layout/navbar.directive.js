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
      controllerAs: 'vm',
      scope: {}
    };
  }

  NavbarController.$inject = ['$state', 'authService', 'hashService']
  function NavbarController($state, authService, hashService) {
    var vm = this;

    vm.logout = authService.logout;
    vm.isLoggedIn = authService.isLoggedIn;

    // get avatar if page refreshes
    if (vm.isLoggedIn()) {
      $('ul.menu img').attr({ "src": "https://www.gravatar.com/avatar/" + hashService.md5(vm.isLoggedIn().email) + "?s=40&d=monsterid&f=y" });
    }
  }
})();
