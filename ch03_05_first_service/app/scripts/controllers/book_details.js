"use strict";

bmApp.controller('BookDetailsCtrl',
function ($scope, $location, $routeParams, BookDataService) {
    var isbn = $routeParams.isbn;
    $scope.book = BookDataService.getBookByIsbn(isbn);

    $scope.goToListView = function() {
        $location.path('/books');
    };
});
