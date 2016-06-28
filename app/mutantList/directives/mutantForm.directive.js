(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .directive('myMutantForm', myMutantForm);

  function myMutantForm() {
    return {
      restrict: 'AE',
      templateUrl: 'app/mutantList/directives/mutantForm.html',
      controller: MutantFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        mutants: '='
      }
    };
  }

  MutantFormController.$inject = ['mutantService'];
  function MutantFormController(mutantService, $scope) {
    var vm = this;

    vm.addMutant = addMutant;
    vm.newMutant = new mutantService.Mutant();

    function addMutant() {
      vm.mutants.$add(vm.newMutant);
      vm.newMutant = new mutantService.Mutant();
    }
  }
})();
