(function () {
'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
  	var self = this;
  	self.title = "To Buy:";
  	self.items = ShoppingListCheckOffService.getItems('toBuy');

  	self.buyItem = function(itemIndex){
  		ShoppingListCheckOffService.buyItem(itemIndex);
  	}

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
  	var self = this;
  	self.title = "Already Bought:";
  	self.items = ShoppingListCheckOffService.getItems('alreadyBought');

  }

  function ShoppingListCheckOffService() {
    var service = this;

    // Initial items for feeding the toBuy list with
    var initialItems = [{name: 'Cookies', quantity: 10},{name: 'Poptart', quantity: 1},{name: 'Bananas', quantity: 7},
    	{name: 'Oranges', quantity: 10},{name: 'Pumpkins', quantity: 75}];

    // List of shopping items
    var items = { toBuy: initialItems, alreadyBought: [] };

    /*
    	Internal methods
    */
    var addItem = function (arrayIndex, itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items[arrayIndex].push(item);
    };

    var removeItem = function (arrayIndex, itemIdex) {
      items[arrayIndex].splice(itemIdex, 1);
    };

    /*
    	Publically available methods
    */

    service.addItem = function(arrayIndex, itemName, quantity){
    	addItem(arrayIndex, itemName, quantity);
    }

    service.removeItem = function(arrayIndex, itemIndex){
    	removeItem(arrayIndex, itemIndex);
    }

    service.buyItem = function(itemIndex) {
    	var item = items.toBuy[itemIndex];
    	addItem('alreadyBought', item.name, item.quantity);
    	removeItem('toBuy', itemIndex);
    }

    service.getItems = function (arrayIndex) {
      return items[arrayIndex];
    };
  }


})();