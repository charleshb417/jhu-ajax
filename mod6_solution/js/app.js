(function () {
'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
  	var HIGH_AMOUNT = 3;

  	$scope.userInputTextbox = "";
  	$scope.latestMessage = "Please list comma separated dishes that you usually have for lunch. NOTE: empty dishes and trailing commas will be ignored (i.e. dish1,,dish2 OR ,dish1 OR dish1,dish2,)";
  	
  	$scope.checkIfTooMuch = function(){
  		if ($scope.userInputTextbox.length == 0){
  		  $scope.latestMessage = "Please enter data first.";
  		}
  		else {
   		  var lunchInputs = $scope.userInputTextbox.split(',');
   		  var sanitizedInputs = [];

   		  // Iterate through lunchInputs and remove the empty inputs
   		  for (var i=0; i<lunchInputs.length; i++){
   		  	if (lunchInputs[i].trim().length > 0){
   		  	  sanitizedInputs.push(lunchInputs[i]);
   		  	}
   		  }

   		  if (sanitizedInputs.length <= HIGH_AMOUNT){
   		  	$scope.latestMessage = "Enjoy!";
   		  }
   		  else {
   		  	$scope.latestMessage = "Too much!";
   		  }
  		}
  	}
  }

})();