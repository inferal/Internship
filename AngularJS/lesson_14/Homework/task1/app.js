var app = angular.module('myApp', []);

app.service('mainService', function () {
   var service = this;
   
   service.mySum = function (num1, num2) {
       return num1 + num2;
   };

   service.myMinus = function (num1, num2) {
       return num1 - num2;
   }
   service.myMultiplication = function (num1, num2) {
       return num1 * num2;
   }

});

app.factory('mainDevisionService', function () {
   return function (num1, num2) {
       var output;
       num1 == 0 ? output = "NAN" : output = num1 / num2;
       return output;
   }
});

app.provider('MultiplicationService', function () {
    var provider = this;

    provider.$get = function(){
        return new myMultiplication();
    }
});

app.controller('mainCtrl', function ($scope, mainService, mainDevisionService) {

    $scope.firstNumber = 0;
    $scope.secondNumber = 0;
    $scope.result = 0;

    $scope.mySum = function () {
        $scope.result = mainService.mySum($scope.firstNumber, $scope.secondNumber);
    };

    $scope.myMinus = function () {
        $scope.result = mainService.myMinus($scope.firstNumber, $scope.secondNumber);
    };

    $scope.myMultiplication = function () {
        $scope.result = mainService.myMultiplication($scope.firstNumber, $scope.secondNumber);
    };

    $scope.myDivision = function () {
        $scope.result = mainDevisionService($scope.firstNumber, $scope.secondNumber)
    }
});