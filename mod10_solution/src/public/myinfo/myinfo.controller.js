(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['UserService'];
function MyinfoController(UserService) {
  var $ctrl = this;

  // Check if the user has already been registered or not
  $ctrl.isRegistered = UserService.isRegistered();
  $ctrl.user = UserService.getUserAsObject();
}


})();