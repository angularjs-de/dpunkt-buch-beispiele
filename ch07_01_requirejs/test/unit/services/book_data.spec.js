define([
    'angular',
    'angularMocks',
    'services/book_data'], function (angular, mock) {


    'use strict';

    describe('Service: BookDataService', function () {

        var BookDataService;

        // load the application module
        beforeEach(module('bmApp'));

        // get a reference to the service
        beforeEach(inject(function (_BookDataService_) {
            BookDataService = _BookDataService_;
        }));

        describe('Public API', function () {
            it('should include a getBookByIsbn() function', function () {
                expect(BookDataService.getBookByIsbn).toBeDefined();
            });

            it('should include a getBooks() function', function () {
                expect(BookDataService.getBooks).toBeDefined();
            });
        });

    });

});