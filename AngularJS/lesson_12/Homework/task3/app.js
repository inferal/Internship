var app = angular.module('myApp', []);
app.controller('mainCtrl', function ($scope) {
    $scope.mode = {
        name: 'Выбери вопрос'
    };

    $scope.count1 = 0;
    $scope.count2 = 0;
    $scope.count3 = 0;
    $scope.count4 = 0;
    $scope.count5 = 0;
    $scope.total = 0;

    $scope.result1 = function () {
        $scope.count1 = 1;
    };
    $scope.result2 = function () {
        $scope.count2 = 1;
    };
    $scope.result3 = function () {
        $scope.count3 = 1;
    };
    $scope.result4 = function () {
        $scope.count4 = 1;
    };
    $scope.result5 = function () {
        $scope.count5 = 1;
    };
    $scope.showTotal = function () {
        $scope.total = $scope.count1 + $scope.count2 + $scope.count3 + $scope.count4 + $scope.count5;
    }
});
