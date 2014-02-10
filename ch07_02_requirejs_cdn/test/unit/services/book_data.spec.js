define([
    'angular',
    'angularMocks',
    'services/book_data'], function () {


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

        describe('Public API usage', function () {
            describe('getBookByIsbn()', function () {
                it('should return the proper book object (valid isbn)', function () {
                    var isbn = '978-3-86490-050-1',
                        book = BookDataService.getBookByIsbn(isbn);
                    expect(book.title).toBe('CoffeeScript');
                });

                it('should return null (invalid isbn)', function () {
                    var isbn = 'test',
                        book = BookDataService.getBookByIsbn(isbn);
                    expect(book).toBeNull();
                });
            });

            describe('getBooks()', function () {
                it('should return a proper array of book objects', function () {
                    var books = BookDataService.getBooks();
                    expect(books.length).toBe(3);
                });
            });
        });

    });

});