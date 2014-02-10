define([
    'app',
    'controllers/book_list',
    'controllers/book_details'
], function (app) {
    'use strict';
    app.config(function ($routeProvider) {
        $routeProvider.when('/books/:isbn', {
            //templateUrl: 'templates/book_details_with_expressions.html',
            templateUrl: 'templates/book_details.html',
            controller : 'BookDetailsCtrl'
        })
            .when('/books', {
                templateUrl: 'templates/book_list.html',
                controller : 'BookListCtrl'
            })
            .otherwise({
                redirectTo: '/books'
            });
    });
});