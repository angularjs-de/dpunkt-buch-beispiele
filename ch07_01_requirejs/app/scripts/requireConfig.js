require.config({
    paths: {
        angular: '../bower_components/angular/angular',
        angularRoute: '../bower_components/angular-route/angular-route'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular']
    },
    priority: [
        "angular"
    ]
});

require( [
    'angular',
    'app',
    'config/routes'
], function(angular, app) {
    'use strict';
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {
        $html.addClass('ng-app');
        angular.bootstrap($html, [app['name']]);
    });
});