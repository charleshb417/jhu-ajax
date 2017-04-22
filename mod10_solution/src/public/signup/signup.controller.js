(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserService'];
function SignupController(UserService) {
  var $ctrl = this;

  // Check if the user has already been registered or not
  $ctrl.isRegistered = UserService.isRegistered();

  $ctrl.submit = function(){
  	UserService.registerUser(this.user.firstName, this.user.lastName, this.user.favItem, this.user.phone);

  	// This will set to TRUE if no errors occurred in the User service
  	$ctrl.isRegistered = UserService.isRegistered();
  }
}


})();