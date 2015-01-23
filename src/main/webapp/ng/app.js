define(
    ['jquery', 'angular', 'angularRoute', 'angularAnimate', 'angularResource', 'angularUuidService'],
    function ($, angular) {

        var app = angular.module('mvp-kickstart', ['ngRoute', 'ngAnimate', 'ngResource', 'uuid']);
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
            return $resource('/dyn/cruds', {}, {
                query: {
                    method:'GET',
                    isArray:true
                }
            })
        }]);

        app.factory('NewCrud', ['$resource', function($resource) {
            return $resource('/dyn/cruds/:id', null, {
                update: {
                    method:'PUT'
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


        app.controller("HomeController", ['$scope', 'Cruds', 'NewCrud', function ($scope, cruds, newCrud) {
            $scope.crudsQuery = cruds.query();
            $scope.newCrud = {id:"", name:""};
            $scope.save = function(crud) {
                console.log("Saving: "+crud.id+" "+crud.name);
                newCrud.update({id:crud.id}, crud);
            }
        }]);

        return app;
    });

