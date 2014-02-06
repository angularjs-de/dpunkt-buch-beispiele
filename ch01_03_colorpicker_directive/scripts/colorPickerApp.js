"use strict";

var colorPickerApp = angular.module('colorPickerApp', []);

colorPickerApp.controller('MainCtrl', function ($scope) {
    $scope.onColorChange = function(r,g,b,a) {
        console.log('onColorChange', r, g, b, a);
    };
});

colorPickerApp.directive('colorPicker', function () {
    return {
        scope: {
            r:          '@initR',
            g:          '@initG',
            b:          '@initB',
            a:          '@initA',
            onChange:   '&'
        },
        restrict: 'E',
        templateUrl: 'colorPickerTemplate.html',
        link: function(scope) {
            var COLORS = ['r', 'g', 'b', 'a'];

            COLORS.forEach(function(value) {
                scope.$watch(value, function(newValue, oldValue) {
                    if (newValue !== oldValue) {
                        if (angular.isFunction(scope.onChange)) {
                            scope.onChange(generateColorChangeObject());
                        }
                    }
                });
            });

            var generateColorChangeObject = function() {
                var obj = {};

                COLORS.forEach(function(value) {
                    obj[value] = scope[value];
                });

                return obj;
            };
        }
    };
});
