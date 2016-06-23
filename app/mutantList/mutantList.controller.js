(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject = ['mutantService', 'firebaseDataService'];
  function MutantListController(mutantService, firebaseDataService) {
    var vm = this;
    var textsRef = firebaseDataService.root.child('texts');

    vm.addMutant = addMutant;
    vm.mutants = mutantService.mutants;
    vm.newMutant = new mutantService.Mutant();
    vm.deleteMutant = deleteMutant;
    vm.toggleComplete = toggleComplete;
    vm.sendText = sendText;

    function addMutant() {
      vm.mutants.$add(vm.newMutant);
      vm.newMutant = new mutantService.Mutant();
    }

    function deleteMutant(mutant) {
      vm.mutants.$remove(mutant);
    }

    function toggleComplete(mutant) {
      vm.mutants.$save(mutant);
    }

    function sendText(mutant) {
      var newText = {
        name: mutant.name,
        phone: mutant.phone,
        topic: mutant.topic
      };
      textsRef.push(newText);
      mutant.notified = true;
      vm.mutants.$save(mutant);
    }
  }
})();
