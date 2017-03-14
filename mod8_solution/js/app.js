(function () {
'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var self = this;

    self.searchTerm = "";
    self.narrowDown = function(){
      MenuSearchService.getMatchedMenuItems(self.searchTerm);
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