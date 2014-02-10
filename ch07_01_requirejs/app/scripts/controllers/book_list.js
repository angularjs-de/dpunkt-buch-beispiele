define([
    'app',
    'services/book_data'
], function (app) {
    "use strict";
    app.controller('BookListCtrl', function ($scope, BookDataService) {
        $scope.getBookOrder = function (book) {
            return book.title;
        };

        $scope.books = BookDataService.getBooks();
    });
});

