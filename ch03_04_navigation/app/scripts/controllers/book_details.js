"use strict";

bmApp.controller('BookDetailsCtrl', function ($scope, $location) {
    $scope.book = {
        title       : 'JavaScript für Enterprise-Entwickler',
        subtitle    : 'Professionell programmieren im Browser und auf dem Server',
        isbn        : '978-3-89864-728-1',
        abstract    : 'JavaScript ist längst nicht mehr nur für klassische Webprogrammierer interessant.',
        numPages    : 302,
        author      : 'Oliver Ochs',
        publisher   : {
            name: 'dpunkt.verlag',
            url : 'http://dpunkt.de/'
        }
    };

    $scope.goToListView = function() {
        $location.path('/books');
    };
});
