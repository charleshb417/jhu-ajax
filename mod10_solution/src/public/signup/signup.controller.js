(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserService', 'MenuItemsService'];
function SignupController(UserService, MenuItemsService) {
  var $ctrl = this;

  // Check if the user has already been registered or not
  $ctrl.isRegistered = UserService.isRegistered();
  $ctrl.favoriteItemExists = false;

  $ctrl.submit = function(){
  	UserService.registerUser(this.user.firstName, this.user.lastName, this.user.favItem, this.user.phone);

  	// This will set to TRUE if no errors occurred in the User service
  	$ctrl.isRegistered = UserService.isRegistered();
  }

  $ctrl.validateShortName = function(shortName, form){
  	if (shortName && shortName.length == 2){
	  	MenuItemsService.getMenuItem(shortName).then(function(response){
		  	if (response.hasOwnProperty("error")){
		  		$ctrl.favoriteItemExists = false;
		  		form.$setValidity("favItem", false);
		  	} else {
		  		$ctrl.favoriteItemExists = true;
		  		form.$setValidity("favItem", true);
		  	}
		  });
  	} else if ( (shortName && shortName.length == 0) || !shortName) {
  		form.$setValidity("favItem", true);
  	}
  };
}


})();