angular.module('myApp', ['ngRoute'])
    .controller('mainCtrl', function ($scope) {

        $scope.items = [
            {
                id: '1',
                menu: 'Home',
                description: 'HOME'
            },
            {
                id: '2',
                menu: 'Contact',
                description: 'CONTACT'
            },
            {
                id: '3',
                menu: 'Map',
                description: 'MAP'
            }
        ];
    })
    .controller('menuCtrl', function ($scope, $route, $routeParams) {
        $scope.itemPrice = $scope.items[$routeParams.index].description;
    })
    .config(function ($routeProvider) {
        $routeProvider.when('/views/:index', {template: '<h4>{{itemPrice}}</h4>', controller: 'menuCtrl'});
    })

    .directive('myMenu', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/menu.html',
            scope:false,
            replace: true
        }
    })

