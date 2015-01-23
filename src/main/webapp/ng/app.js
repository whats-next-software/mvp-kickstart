define(
    ['jquery', 'angular', 'angularRoute', 'angularAnimate', 'angularResource'],
    function ($, angular) {

        var app = angular.module('mvp-kickstart', ['ngRoute', 'ngAnimate', 'ngResource']);
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

        app.factory('Cruds', ['$resource', function($resource) {
            return $resource('cruds', {}, {
                query: {
                    method:'GET',
                    isArray:true
                }
            })
        }]);

        app.directive("example-directive", function () {
            return {
                restrict: 'A',
                link: function (scope, element, attributes, controllers){
                }
            };
        });


        app.controller("HomeController", ['$scope', 'Cruds', function ($scope, cruds) {
            $scope.cruds = cruds.query();
        }]);

        return app;
    });

