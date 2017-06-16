angular.module('myApp', [])
.controller('mainCtrl', function ($scope) {

})

.directive('ulDir', function () {
    return{
        restrict: 'A',
        priority: 1,
        link: function (scope, elem, attrs) {
            var ulList = angular.element('<ul id="test">');

            for (var i = 0; i < 12; i++){
                var liElem = angular.element('<li>').text("List Item " + (i+1));
                ulList.append(liElem);
            }
            elem.append(ulList);
        }
    }
})

.directive('redDir', function () {
    return {
        restrict: 'A',
        priority: 2,
        link: function (scope, elem, attrs) {
            var li = angular.element(document.querySelector("ul#test"))[0].children;
            for (var i = 0; i < li.length; i++){
                if (i % 2){
                    angular.element(document.querySelector("ul#test"))[0].children[i].className = 'red';
                }
            }
        }
    }
})