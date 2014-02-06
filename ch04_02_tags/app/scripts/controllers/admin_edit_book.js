"use strict";

bmApp.controller('AdminEditBookCtrl', function ($scope, $routeParams, $location, BookDataService) {
    $scope.isEditMode = true;
    $scope.submitBtnLabel = 'Buch editieren';

    var isbn = $routeParams.isbn;
    $scope.book = BookDataService.getBookByIsbn(isbn);

    $scope.submitAction = function() {
        BookDataService.updateBook($scope.book);
        goToAdminListView();
    };

    $scope.cancelAction = function() {
        goToAdminListView();
    };

    var goToAdminListView = function() {
        $location.path('/admin/books');
    };
});
