"use strict";

bmApp.controller('BookListCtrl', function ($scope, $filter) {
    $scope.getBookOrder = function(book) {
        return book.title;
    };

    $scope.books = [
        {
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
        },
        {
            title       : 'Node.js & Co.',
            subtitle    : 'Skalierbare, hochperformante und echtzeitfähige Webanwendungen professionell in JavaScript entwickeln',
            isbn        : '978-3-89864-829-5',
            abstract    : 'Nach dem Webbrowser erobert JavaScript nun auch den Webserver.',
            numPages    : 334,
            author      : 'Golo Roden',
            publisher   : {
                name: 'dpunkt.verlag',
                url : 'http://dpunkt.de/'
            }
        },
        {
            title       : 'CoffeeScript',
            subtitle    : 'Einfach JavaScript',
            isbn        : '978-3-86490-050-1',
            abstract    : 'CoffeeScript ist eine junge, kleine Programmiersprache, die nach JavaScript übersetzt wird.',
            numPages    : 200,
            author      : 'Andreas Schubert',
            publisher   : {
                name: 'dpunkt.verlag',
                url : 'http://dpunkt.de/'
            }
        }
    ];

    // This is just to demonstrate the programmatic usage of a filter
    var orderBy = $filter('orderBy');

    var titles = $scope.books.map(function(book) {
        return {title: book.title};
    });

    console.log('titles before ordering', titles);

    // This is the actual invocation of the filter
    titles = orderBy(titles, 'title');

    console.log('titles after ordering', titles);
});
