(function() {
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('emailService', emailService);

  emailService.$inject = ['firebaseDataService'];
  function emailService(firebaseDataService) {
    var service = {
      sendEmail: sendEmail
    };

    return service;

    ///////////////

    function sendEmail(email) {
      var newEmail = {
        email: email,
      };
      firebaseDataService.emails.push(newEmail);
    }
  }
})();
