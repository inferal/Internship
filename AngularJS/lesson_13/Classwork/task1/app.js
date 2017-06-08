var app = angular.module("myApp", []);
app.controller("mainCtrl", function ($scope) {
    $scope.classNames = "test-div lightGreen";
    $scope.changeBg = function () {

        if ($scope.classNames = "test-div lightGreen"){
            $scope.classNames = "test-div lightBlue";
        }else{
            $scope.classNames = "test-div lightGreen";
        }

    }

});