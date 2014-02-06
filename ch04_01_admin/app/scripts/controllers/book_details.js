"use strict";

bmApp.controller('BookDetailsCtrl',
function ($scope, $location, $routeParams, BookDataService) {
    var isbn = $routeParams.isbn;
    $scope.book = BookDataService.getBookByIsbn(isbn);

    $scope.goToListView = function() {
        if ($location.path().indexOf('/admin') === 0) {
            $location.path('/admin/books');
        }
        else {
            $location.path('/books');
        }
    };
});
