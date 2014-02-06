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
        'James Doe', 'Clarissa Doe', 'Ted Doe',
        'Burk Smith', 'Samantha Jones', 'Bill Brooks'
    ];

    // a primitive value
    $scope.loggedIn = true;
});

angular.module('myApp').filter('alternatingCase', function () {
    return function (input) {
        var output = '',
            tmp;

        for (var i = 0; i < input.length; i++) {
            tmp = input.charAt(i);

            if (i % 2 === 0) {
                output += tmp.toUpperCase();
            }
            else {
                output += tmp.toLowerCase();
            }
        }

        return output;
    };
});

angular.module('myApp').filter('endsWithDoe', function () {
    return function (inputArray) {
        var outputArray = [];

        angular.forEach(inputArray, function (item) {
            if (item.length >= 3
                && item.substring(item.length - 3) === 'Doe') {
                outputArray.push(item);
            }
        });

        return outputArray;
    };
});

angular.module('myApp').filter('endsWith', function () {
    return function (inputArray, endsWith) {
        var outputArray = [],
            subString,
            hasMinLen,
            isSubStringMatching;

        angular.forEach(inputArray, function (item) {
            hasMinLen = item.length >= endsWith.length;
            subString = item.substring(item.length - endsWith.length);
            isSubStringMatching = subString === endsWith;

            if (hasMinLen && isSubStringMatching) {
                outputArray.push(item);
            }
        });

        return outputArray;
    };
});
