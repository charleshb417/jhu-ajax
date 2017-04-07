(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'partials/items.template.html',
  bindings: {
    items: '<'
  }
});

})();