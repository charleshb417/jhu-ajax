(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'partials/categories.template.html',
  bindings: {
    categs: '<'
  }
});

})();