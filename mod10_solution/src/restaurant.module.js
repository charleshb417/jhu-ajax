(function() {
"use strict";

/**
 * Restaurant module that includes the public module as a dependency
 */
angular.module('restaurant', ['public'])
.config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config($stateProvider, $urlRouterProvider) {

  // If user goes to a path that doesn't exist, redirect to public root
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/'
    })

    .state('myinfo', {
      url: '/myinfo',
      templateUrl: 'src/public/myinfo/myinfo.html'
    })

    .state('signup', {
      url: '/signup',
      templateUrl: 'src/public/signup/signup.html'
    });

}

})();