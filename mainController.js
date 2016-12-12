var myApp = angular.module('myFirstApp',[]);

myApp.controller('mainController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);
