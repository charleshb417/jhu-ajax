(function () {
"use strict";

angular.module('public')
.service('MenuItemsService', MenuItemsService);

MenuItemsService.$inject = ['$http', '$q'];
function MenuItemsService($http, $q) {
	var service = this;
	var BASE_URL = "https://charleshb417-ajax-course5.herokuapp.com/";

	var categoriesUrl = BASE_URL + "categories.json";
	var itemsJsonPrefix = BASE_URL + "menu_items.json?category=";
	var singleItemJsonPrefix = BASE_URL + "menu_items/";

	service.getAllCategories = function(){
	    var deferred = $q.defer();

	    $http({ method: 'GET', url: categoriesUrl }).then(function (result) {
	        deferred.resolve(result.data);
	    }, function (error) { 
	    	deferred.resolve({error:error});
	    });

	    return deferred.promise;
	};

	service.getItemsForCategory = function(categoryShortName){
	    var deferred = $q.defer();

	    $http({ method: 'GET', url: itemsJsonPrefix + categoryShortName }).then(function (result) {
	        deferred.resolve(result.data);
	    }, function (error) { 
	    	deferred.resolve({error:error});
	    });

	    return deferred.promise;
	};

	service.getMenuItem = function(shortName){
	    var deferred = $q.defer();
	    $http({ method: 'GET', url: singleItemJsonPrefix + shortName + ".json" }).then(function (result) {
	        deferred.resolve(result.data);
	    }, function (error) { 
	    	deferred.resolve({error:error});
	    });

	    return deferred.promise;
	};
}


})();