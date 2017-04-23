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
      templateUrl: 'src/public/myinfo/myinfo.html',
      controller: 'MyinfoController as ctrl',
      resolve: {
        user: ['MenuItemsService', 'UserService', function (MenuItemsService, UserService) {
          var user = UserService.getUserAsObject();
          user.isRegistered = UserService.isRegistered();
          if (user.favItem.length > 0){
            user.objectPromise = MenuItemsService.getMenuItem(user.favItem);
          }
          return user;
        }]
      }
    })

    .state('signup', {
      url: '/signup',
      templateUrl: 'src/public/signup/signup.html',
      controller: 'SignupController as ctrl'
    });

}

})();
