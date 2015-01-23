require.config({
    paths : {
        'jquery' : '/bower_components/jquery/dist/jquery.min',
        'angular' : '/bower_components/angular/angular.min',
        'angularAnimate' : '/bower_components/angular-animate/angular-animate.min',
        'angularRoute' : '/bower_components/angular-route/angular-route.min',
        'angularResource' : '/bower_components/angular-resource/angular-resource.min',
        'app' : '/ng/app'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angularAnimate': {
            deps: ['angular']
        },
        'angularRoute': {
            deps: ['angular']
        },
        'angularResource': {
            deps: ['angular']
        }
    }
});


require(['jquery', 'angular','app', 'angularRoute', 'angularResource'], function($, angular, app) {
    angular.bootstrap(document, ['mvp-kickstart']);
});

