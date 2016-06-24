(function() {
  'use strict';

  angular
    .module('mutantApp.layout')
    .directive('myNavbar', myNavbar);

  function myNavbar() {
    return {
      restrict: 'AE',
      templateUrl: 'app/layout/navbar.html'
    };
  }
})();
