(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .directive('myMutantTable', myMutantTable);

  function myMutantTable() {
    return {
      restrict: 'AE',
      templateUrl: 'app/mutantList/directives/mutantTable.html',
      controller: MutantTableController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        mutants: '='
      }
    };
  }

  MutantTableController.$inject = ['textMessageService'];
  function MutantTableController(textMessageService) {
    var vm = this;

    vm.deleteMutant = deleteMutant;
    vm.toggleComplete = toggleComplete;
    vm.sendText = sendText;

    function deleteMutant(mutant) {
      vm.mutants.$remove(mutant);
    }

    function toggleComplete(mutant) {
      vm.mutants.$save(mutant);
    }

    function sendText(mutant) {
      textMessageService.sendText(mutant, vm.mutants);
    }
  }
})();
