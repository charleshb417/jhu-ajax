(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['user'];
function MyinfoController(user) {
  var $ctrl = this;

  // Check if the user has already been registered or not
  $ctrl.isRegistered = user.isRegistered;
  $ctrl.user = user;

  if (user.hasOwnProperty("objectPromise")){
	  user.objectPromise.then(function(response){
	  	user.favItemObject = response;
	  });
  }
}


})();