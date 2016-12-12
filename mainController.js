angular.module('myApp',[])

.controller('mainCtrl', function($scope) {
  $scope.test = 'It\'s party time';

  $scope.addGuest = function (guest , color) {
    // get value from input
    // make new guest opject with random color
    // add that guest to the guests array
    var newGuest = {
      name: guest,
      color:color
    }
    console.log($scope.newColor);

    $scope.guests.push(newGuest);
  }



$scope.guests = [
  {
    name: 'Scott',
    favColor : 'red'
  },
  {
    name:'tom',
    favColor: 'pink'
  }
  ,
  {
    name : 'Doug',
    favColor: 'green'
  }
  ,
  {
    name : 'dog',
    favColor: "gray"
  }
  ,
    {
      name : 'batman',
    favColor : 'Black'
  }
];





});
