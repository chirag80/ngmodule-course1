var app = angular.module('ngmodule1', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html",
            controller: "module1Ctrl"
        })
        .when("/home", {
            templateUrl: "views/home.html",
            controller: "module1Ctrl"
        })
        .when("/login", {
            templateUrl: "views/login.html"
        })
        .when("/help", {
            templateUrl: "views/help.html"
        })
        .when("/about", {
            templateUrl: "views/about.html"
        })
});