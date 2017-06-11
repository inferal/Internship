var myApp = angular.module("myApp", []);

myApp.service("mainService", function () {
    var service = this;

    var modelList = [
        {
            name: "Купить молко",
            description: "Сходить на рынок и купить молоко",
            date: "2/18/2015",
            completed: false
        },
        {
            name: "Посмотреть видео урок по AngularJS",
            description: "Доcмотреть до конца урок на itvdn.com",
            date: "2/18/2015",
            completed: false
        }
    ];

    service.toDoList = modelList;

    service.getToDoList = function () {
        return service.toDoList;
    };
    
    service.clickAdd = function (inputName, inputDescription, inputDueDate, inputComleted) {

        var obj = {};

        obj.name = inputName;
        obj.description = inputDescription;
        obj.duedate = inputDueDate;
        obj.completed = inputComleted;

        service.toDoList.push(obj);


        return obj;
    };

});

myApp.controller("mainCtrl", function ($scope, mainService) {

    $scope.inputName = "";
    $scope.inputDesctiption = "";
    $scope.inputDueDate = "";
    $scope.inputCompleted = "";
    $scope.newTaskSent = false;

    $scope.tasks = mainService.getToDoList ();

    $scope.showText = function(completed) {
        return completed ? "Да" : "";
    };

    $scope.clickAdd = function () {
        if($scope.inputName != "" && $scope.inputDesctiption != "" && $scope.inputDueDate != ""){
            $scope.newTaskObj = mainService.clickAdd($scope.inputName, $scope.inputDesctiption, $scope.inputDueDate, $scope.inputCompleted);
            $scope.newTaskSent = true;
        }
    }
});