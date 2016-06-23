(function() {
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('firebaseDataService', firebaseDataService);

    function firebaseDataService() {
      var root = firebase.database().ref();

      var service = {
        root: root,
        mutants: root.child('mutants'),
        texts: root.child('texts')
      };

      return service;
    }
})();
