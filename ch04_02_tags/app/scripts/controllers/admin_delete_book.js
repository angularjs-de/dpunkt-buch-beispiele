"use strict";

bmApp.controller('AdminDeleteBookCtrl', function ($scope, $routeParams, $location, BookDataService) {
    var isbn = $routeParams.isbn;
    $scope.book = BookDataService.getBookByIsbn(isbn);

    $scope.deleteBook = function(isbn) {
        BookDataService.deleteBookByIsbn(isbn);
        goToAdminListView();
    };

    $scope.cancel = function() {
        goToAdminListView();
    };

    var goToAdminListView = function() {
        $location.path('/admin/books');
    };
});
