"use strict";

var dateApp = angular.module('dateApp', []);

dateApp.controller('DateCtrl', function ($scope, $timeout) {
    $scope.now = 'Loading...';

    var updateTime = function() {
        $timeout(function() {
            $scope.now = new Date();
            updateTime();
        }, 1000);
    };

    updateTime();
});

dateApp.filter('truncate', function () {
    return function (input, charCount) {
        var output  = input;

        if (output.length > charCount) {
            output = output.substr(0, charCount) + '...';
        }

        return output;
    };
});
