(function () {
'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController);

  function ToBuyController() {
  	var self = this;
  	self.title = "To Buy:";


  }

  function AlreadyBoughtController(){
  	var self = this;
  	self.title = "Already Bought:";

  }


})();