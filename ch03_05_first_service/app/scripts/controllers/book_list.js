"use strict";

bmApp.controller('BookListCtrl', function ($scope, BookDataService) {
    $scope.getBookOrder = function(book) {
        return book.title;
    };

    $scope.books = BookDataService.getBooks();
});
