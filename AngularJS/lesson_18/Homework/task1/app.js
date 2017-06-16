angular.module('myApp', [])
.controller('mainCtrl', function ($scope) {
    $scope.price = '';

    $scope.items =
        [
            { name: "Table", price: 44.10 },
            { name: "Chair", price: 21.20 },
            { name: "Pillow", price: 12.20 },
            { name: "Picture", price: 112.70 },
            { name: "Lamp", price: 28.31 }
        ];
    $scope.clicker = function (i) {
        $scope.price = $scope.items[i].price;
    }
})

.directive('menu', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'templates/template.html',
        controller: 'mainCtrl'
    }
})
.directive('show', function () {
    return {
        restrict: 'A',
        replace: true,
        controller: 'mainCtrl',
        link: function (scope, elem, attrs) {
            scope.$watch('price', function () {
                if(scope.price != '')
                    angular.element(document.querySelector("p#show")).text("Price is: " + scope.price);
            })
        }
    }
})