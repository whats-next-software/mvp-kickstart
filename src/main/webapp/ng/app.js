define(
    ['jquery', 'angular', 'angularRoute', 'angularAnimate'],
    function ($, angular) {

        var app = angular.module('mvp-kickstart', ['ngRoute', 'ngAnimate']);
        app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: 'ng/home.ng',
                controller: 'HomeController'
            }).when('/under-construction', {
                templateUrl: 'ng/under-construction.ng',
                controller: 'UnderConstructionController'
            }).otherwise({
                redirectTo: '/home'
            });
        }]);

        app.directive("example-directive", function () {
            return {
                restrict: 'A',
                link: function (scope, element, attributes, controllers){
                }
            };
        });


        app.controller("HomeController", function ($scope) {
        });

        return app;
    });

