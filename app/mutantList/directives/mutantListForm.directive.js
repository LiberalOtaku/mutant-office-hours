(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .directive('myMutantListForm', myMutantListForm);

  function myMutantListForm() {
    return {
      restrict: 'AE',
      templateUrl: 'app/mutantList/directives/mutantListForm.html'
    };
  }
})();
