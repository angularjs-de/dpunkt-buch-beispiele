define([
    'angular',
    'app'
], function (angular, app) {
    "use strict";

    app.factory('BookDataService', function () {
        var srv = {};

        srv._books = [
            {
                title    : 'JavaScript für Enterprise-Entwickler',
                subtitle : 'Professionell programmieren im Browser und auf dem Server',
                isbn     : '978-3-89864-728-1',
                abstract : 'JavaScript ist längst nicht mehr nur für klassische Webprogrammierer interessant.',
                numPages : 302,
                author   : 'Oliver Ochs',
                publisher: {
                    name: 'dpunkt.verlag',
                    url : 'http://dpunkt.de/'
                }
            },
            {
                title    : 'Node.js & Co.',
                subtitle : 'Skalierbare, hochperformante und echtzeitfähige Webanwendungen professionell in JavaScript entwickeln',
                isbn     : '978-3-89864-829-5',
                abstract : 'Nach dem Webbrowser erobert JavaScript nun auch den Webserver.',
                numPages : 334,
                author   : 'Golo Roden',
                publisher: {
                    name: 'dpunkt.verlag',
                    url : 'http://dpunkt.de/'
                }
            },
            {
                title    : 'CoffeeScript',
                subtitle : 'Einfach JavaScript',
                isbn     : '978-3-86490-050-1',
                abstract : 'CoffeeScript ist eine junge, kleine Programmiersprache, die nach JavaScript übersetzt wird.',
                numPages : 200,
                author   : 'Andreas Schubert',
                publisher: {
                    name: 'dpunkt.verlag',
                    url : 'http://dpunkt.de/'
                }
            }
        ];

        // Service implementation
        srv.getBookByIsbn = function (isbn) {
            for (var i = 0, n = srv._books.length; i < n; i++) {
                if (isbn === srv._books[i].isbn) {
                    return srv._books[i];
                }
            }

            return null;
        };

        srv.getBooks = function () {
            // Copy the array in order not to expose internal data structures
            return angular.copy(srv._books);
        };

        // Public API
        return {
            getBookByIsbn: function (isbn) {
                return srv.getBookByIsbn(isbn);
            },
            getBooks     : function () {
                return srv.getBooks();
            }
        };
    });
});