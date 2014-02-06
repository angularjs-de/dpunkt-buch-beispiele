"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MyCtrl', function ($scope) {
    // a simple JavaScript object
    $scope.user = {
        name: 'John Doe',
        age: 27,
        email: 'john@doe.com'
    };

    // a simple JavaScript array
    $scope.family = [
        'James Doe', 'Clarissa Doe', 'Ted Doe'
    ];

    // a primitive value
    $scope.loggedIn = true;
});
