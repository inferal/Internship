angular.module('myApp', ['ngRoute'])
    .controller('mainCtrl', function ($scope) {

        $scope.items = [
            {
                id: '1',
                menu: 'Home',
                description: '/home.html'
            },
            {
                id: '2',
                menu: 'Contact',
                description: '/contact.html'
            },
            {
                id: '3',
                menu: 'Map',
                description: '/map.html'
            }
        ];
    })


    .config(function ($routeProvider) {
        $routeProvider
            .when('/home',
                {
                    templateUrl: 'views/home.html'
                })
            .when('/contact',
                {
                    templateUrl: 'views/contact.html'
                })
            .when('/map',
                {
                    templateUrl: 'views/map.html'
                })
    })

    .directive('myMenu', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/menu.html',
            replace: true
        }
    })

