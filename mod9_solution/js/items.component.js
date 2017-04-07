(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'partials/items.template.html',
  controller: ItemsComponentController,
  bindings: {
    items: '<'
  }
});


function ItemsComponentController(){
	var self = this;

	self.getPriceString = function(item){
		var priceSmallExists = item.price_small != null;
		var unitSmallExists = item.small_portion_name != null;
		var priceLargeExists = item.price_small != null;
		var unitLargeExists = item.small_portion_name != null;

		var returnString = "";

		if (priceSmallExists){
			returnString += item.price_small;

			if (unitSmallExists){
				returnString += " / " + item.small_portion_name;
			}
		}

		if (priceLargeExists){
			if (returnString.length > 0){
				returnString += " | ";
			}

			returnString += item.price_large;

			if (unitLargeExists){
				returnString += " / " + item.large_portion_name;
			}
		}

		return returnString;
	}
}

})();