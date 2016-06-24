(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .factory('authService', authService);

    authService.$inject = ['$firebaseAuth', '$state'];
    function authService($firebaseAuth, $state) {
      var auth = $firebaseAuth();

      var service = {
        register: register,
        login: login,
        logout: logout
      };

      return service;

      ///////////////

      function register(user) {
        auth
          .$createUserWithEmailAndPassword(user.email, user.password)
          .then(function() {
            vm.login(user);
          })
          .catch(function(error) {
            console.log(error);
          });
      }

      function login(user) {
        return auth.$signInWithEmailAndPassword(user.email, user.password)
          .then(function() {
            console.log('Logged in using ' + user.email + '!');
            $state.go('mutantList');
          })
          .catch(function(error) {
            console.log(error);
          });
      }

      function logout() {
        auth.$signOut();
        $state.go('home');
      }
    }
})();
