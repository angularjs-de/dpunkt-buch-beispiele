"use strict";

bmApp.controller('AdminNewBookCtrl', function ($scope, $location, BookDataService) {
    $scope.book = {};
    $scope.submitBtnLabel = 'Buch anlegen';

    $scope.submitAction = function() {
        BookDataService.storeBook($scope.book);
        goToAdminListView();
    };

    $scope.cancelAction = function() {
        goToAdminListView();
    };

    var goToAdminListView = function() {
        $location.path('/admin/books');
    };
});
