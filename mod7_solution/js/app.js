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

  	self.getCostPerItem = function(quantity, price) {
  		return quantity * price;
  	};
  }

  function ShoppingListCheckOffService() {
    var service = this;

    // Initial items for feeding the toBuy list with
    var initialItems = [{name: 'Cookies', quantity: 10, pricePerItem: 1.25},{name: 'Poptart', quantity: 1, pricePerItem: .75},
    	{name: 'Bananas', quantity: 7, pricePerItem:.25}, {name: 'Oranges', quantity: 10, pricePerItem:.5},
    	{name: 'Pumpkins', quantity: 75, pricePerItem:2.5}];

    // List of shopping items
    var items = { toBuy: initialItems, alreadyBought: [] };

    /*
    	Internal methods
    */
    var addItem = function (arrayIndex, itemName, quantity, price) {
      var item = {
        name: itemName,
        quantity: quantity,
        pricePerItem: price
      };

      items[arrayIndex].push(item);
    };

    var removeItem = function (arrayIndex, itemIdex) {
      items[arrayIndex].splice(itemIdex, 1);
    };

    /*
    	Publically available methods
    */

    service.addItem = function(arrayIndex, itemName, quantity, price){
    	addItem(arrayIndex, itemName, quantity, price);
    }

    service.removeItem = function(arrayIndex, itemIndex){
    	removeItem(arrayIndex, itemIndex);
    }

    service.buyItem = function(itemIndex) {
    	var item = items.toBuy[itemIndex];
    	addItem('alreadyBought', item.name, item.quantity, item.pricePerItem);
    	removeItem('toBuy', itemIndex);
    }

    service.getItems = function (arrayIndex) {
      return items[arrayIndex];
    };
  }


})();