"use strict";

bmApp.controller('AdminBookListCtrl', function ($scope, BookDataService) {
    $scope.isAdmin = true;

    $scope.getBookOrder = function(book) {
        return book.title;
    };

    $scope.books = BookDataService.getBooks();
});
