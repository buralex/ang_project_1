(function(angular) {
  'use strict';
angular.module('myApp')

   .controller('MainController', ['$scope', function($scope) {
     
          var elms = document.querySelectorAll("h1");

for (var i = 0; i < elms.length; i++) {
  var el = elms[i];
  el.style.backgroundColor = "yellow";
}
    
  }]);


})(window.angular);