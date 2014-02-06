"use strict";

colorPickerApp.controller('MainCtrl', function ($scope) {
    $scope.onColorChange = function(r,g,b,a) {
        console.log('onColorChange', r, g, b, a);
    };
});
