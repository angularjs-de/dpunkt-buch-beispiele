define([
    'angular',
    'app',
    'services/book_data'
], function (angular, app) {
    "use strict";

    app.controller('BookDetailsCtrl',
        function ($scope, $location, $routeParams, BookDataService) {
            var isbn = $routeParams.isbn;
            $scope.book = BookDataService.getBookByIsbn(isbn);

            $scope.goToListView = function () {
                $location.path('/books');
            };
        });
});