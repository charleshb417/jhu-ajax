(function () {
'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

  // // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'partials/categories.html',
      controller: 'CategoriesController as ctrl',
      resolve: {
        categoriesItems: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('categories.item', {
      url: '/item/{shortName}',
      templateUrl: 'partials/items.html',
      controller: 'ItemsController as itemCtrl',
      resolve: {
        items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
          var shortName = $stateParams.shortName;
          return MenuDataService.getItemsForCategory(shortName);
        }]
      }
    });
  }

})();