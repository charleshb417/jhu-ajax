(function () {
"use strict";

angular.module('public')
.service('MenuItemsService', MenuItemsService);

MenuItemsService.$inject = ['$http', '$q'];
function MenuItemsService() {
	var service = this;

	// var categoriesUrl = "https://davids-restaurant.herokuapp.com/categories.json";
	// var itemsJsonPrefix = "https://davids-restaurant.herokuapp.com/menu_items.json?category=";

	// service.getAllCategories = function(){
	//     var deferred = $q.defer();

	//     $http({ method: 'GET', url: categoriesUrl }).then(function (result) {
	//         deferred.resolve(result.data);
	//     });

	//     return deferred.promise;
	// };

	// service.getItemsForCategory = function(categoryShortName){
	//     var deferred = $q.defer();

	//     $http({ method: 'GET', url: itemsJsonPrefix + categoryShortName }).then(function (result) {
	//         deferred.resolve(result.data);
	//     });

	//     return deferred.promise;
	// };
}


})();