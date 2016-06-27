(function() {
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('firebaseDataService', firebaseDataService);

    function firebaseDataService() {
      var root = firebase.database().ref();

      var service = {
        root: root,
        texts: root.child('texts'),
        emails: root.child('emails'),
        users: root.child('users')
      };

      return service;
    }
})();
