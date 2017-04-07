(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService', 'categoriesItems'];
function CategoriesController(MenuDataService, categoriesItems) {
  var ctrl = this;

  ctrl.categoriesItems = categoriesItems;
}

})();