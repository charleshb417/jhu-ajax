(function () {
'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
  	var HIGH_AMOUNT = 3;

  	$scope.messageType = "";
  	$scope.userInputTextbox = "";
  	$scope.latestMessage = "";
  	
  	$scope.checkIfTooMuch = function(){
		var lunchInputs = $scope.userInputTextbox.split(',');
		var sanitizedInputs = [];

		// Iterate through lunchInputs and remove the empty inputs
		for (var i=0; i<lunchInputs.length; i++){
		  if (lunchInputs[i].trim().length > 0){
		    sanitizedInputs.push(lunchInputs[i]);
		  }
		}

		if (sanitizedInputs.length > 0 && sanitizedInputs.length <= HIGH_AMOUNT){
	      $scope.latestMessage = "Enjoy!";
		  $scope.messageType = "message-valid";
		} else if (sanitizedInputs.length > HIGH_AMOUNT){
		  $scope.latestMessage = "Too much!";
	      $scope.messageType = "message-valid";
		} else {
		  $scope.latestMessage = "Please enter data first.";
		  $scope.messageType = "message-invalid";
		}
  	}
  }

})();