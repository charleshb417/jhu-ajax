(function () {
'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){

  }

  function MenuSearchService(){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){

    };
  }

})();