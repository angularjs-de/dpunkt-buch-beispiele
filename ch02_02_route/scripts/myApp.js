"use strict";

angular.module('myApp', ['ngRoute']);

angular.module('myApp').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/mainTemplate.html',
            controller: 'MainCtrl'
        })
        .when('/user/:userId', {
            templateUrl: 'templates/userDetailsTemplate.html',
            controller: 'UserDetailsCtrl'
        })
        .when('/user', {
            templateUrl: 'templates/userOverviewTemplate.html',
            controller: 'UserOverviewCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('myApp').controller('MainCtrl', function () {
    console.log('MainCtrl invoked!');
});

angular.module('myApp').controller('UserDetailsCtrl', function ($scope, $routeParams) {
    console.log('UserDetailsCtrl invoked with userId: ' + $routeParams.userId);
    $scope.userId = $routeParams.userId;
});

angular.module('myApp').controller('UserOverviewCtrl', function () {
    console.log('UserOverviewCtrl invoked!');
});
