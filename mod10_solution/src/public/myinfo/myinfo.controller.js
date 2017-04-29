(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['user'];
function MyinfoController(user) {
  var $ctrl = this;
  
  // Check if the user has already been registered or not
  $ctrl.isRegistered = user.isRegistered;

  if (user.hasOwnProperty("objectPromise")){
	  user.objectPromise.then(function(response){
	  	if (response.hasOwnProperty("error")){
	  		user.noItemExists = true;
	  	} else {
	  		user.favItemObject = response;
	  		user.favItemUrl = "http://www.davidchuschinabistro.com/images/" + user.favItem + ".jpg";
	  	}
	  });
  }

  $ctrl.user = user;
}


})();