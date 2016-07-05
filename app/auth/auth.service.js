(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .factory('authService', authService);

    authService.$inject = ['$firebaseAuth', 'firebaseDataService', 'mutantService'];
    function authService($firebaseAuth, firebaseDataService, mutantService) {
      var auth = $firebaseAuth();

      var service = {
        auth: auth,
        register: register,
        login: login,
        logout: logout,
        isLoggedIn: isLoggedIn,
        sendWelcomeEmail: sendWelcomeEmail,
        sendPasswordResetEmail: sendPasswordResetEmail,
        // resetPassword: resetPassword
      };

      return service;

      ///////////////

      function register(user) {
        return auth.$createUserWithEmailAndPassword(user.email, user.password);
      }

      function login(user) {
        return auth.$signInWithEmailAndPassword(user.email, user.password);
      }

      function logout() {
        mutantService.reset();
        auth.$signOut();
      }

      function isLoggedIn() {
        return auth.$getAuth();
      }

      function sendWelcomeEmail(email) {
        firebaseDataService.emails.push({
          email: email,
        });
      }

      function sendPasswordResetEmail(email) {
        return auth.$sendPasswordResetEmail(email);
      }

      // function resetPassword(code, newPassword) {
      //   return auth.$confirmPasswordReset(code, newPassword);
      // }
    }
})();
