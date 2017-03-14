(function () {
'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var self = this;

    self.showError = false;

    self.searchTerm = "";

    self.found = [];

    self.narrowDown = function(){
      var url = "https://davids-restaurant.herokuapp.com/menu_items.json";
      var promise = MenuSearchService.getMatchedMenuItems(self.searchTerm, url);

      promise.then(function(response) {
        self.found = response;
        self.showError = response.length > 0 ? false : true;
      })
      .catch(function(error){
        console.log("There was an error:", error);
      });
    };

    self.removeItem = function (itemIndex) {
      self.found.splice(itemIndex, 1);
    };

  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm, serviceUrl){
      var searchTermLowerCase = searchTerm.toLowerCase();

      return $http({ method: 'GET', url: serviceUrl }).then(function (result) {
        var foundItems = [];
        for (var i=0; i<result.data.menu_items.length; i++){
          var item = result.data.menu_items[i];

          if (item.description.toLowerCase().indexOf(searchTerm) != -1){
            foundItems.push(item);
          }
        }
        return foundItems;
      });
    };
  }

  function FoundItemsDirective(){
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };

    return ddo;
  }

  function FoundItemsDirectiveController(){
    var list = this;
    return true;
  };

})();