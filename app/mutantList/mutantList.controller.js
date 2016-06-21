(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject = ['$firebaseArray'];
  function MutantListController($firebaseArray) {
    var vm = this;
    var fireMutantsRef = new Firebase('https://mutant-school.firebaseio.com/');

    vm.addMutant = addMutant;
    vm.mutants = $firebaseArray(fireMutantsRef);
    vm.newMutant = new Mutant();

    function Mutant() {
      this.name  = '';
      this.phone = '';
      this.topic = '';
      this.notified = false;
      this.complete = false;
    }

    function addMutant() {
      vm.mutants.$add(vm.newMutant);
    }
  }
})();
