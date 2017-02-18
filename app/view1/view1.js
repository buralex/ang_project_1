'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'MainController'
  });
}])

.controller('View1Ctrl', [function() {
  
//       var elms = document.querySelectorAll("h1");

// for (var i = 0; i < elms.length; i++) {
//   var el = elms[i];
//   el.style.backgroundColor = "red";
// }

}]);