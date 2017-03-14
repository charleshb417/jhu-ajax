(function () {
'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var self = this;

    self.searchTerm = "";
    self.items = [];
    self.narrowDown = function(){
      var promise = MenuSearchService.getMatchedMenuItems(self.searchTerm);

      promise.then(function(response) {
        self.items = response;
      })
      .catch(function(error){
        console.log("There was an error:", error);
      });
    };
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      var serviceUrl = "https://davids-restaurant.herokuapp.com/menu_items.json";
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

})();