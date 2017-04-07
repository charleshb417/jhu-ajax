(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['$stateParams', 'MenuDataService', 'items'];
function ItemsController($stateParams, MenuDataService, items) {
  var itemCtrl = this;
  var shortName = $stateParams.shortName;
  
  var itemDetails = MenuDataService.getItemsForCategory(shortName);

  itemCtrl.allItems = items.menu_items;
}

})();