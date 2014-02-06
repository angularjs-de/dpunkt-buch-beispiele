"use strict";

bmApp.directive('tokenfield', function(BookDataService) {
    return {
        restrict: 'A',
        scope: {
            // tokenfield holds a two-way bounded
            // reference to the book object
            tokenfield: '='
        },
        link: function(scope, elem) {
            // only call $apply when directive is initialized
            // to avoid 'digest already in progress'
            var initialized = false;

            elem.tokenfield({
                autocomplete: {
                    source: BookDataService.getTags(),
                    delay: 100
                },
                showAutocompleteOnFocus: false,
                allowDuplicates: false,
                createTokensOnBlur: true
            }).on('afterCreateToken', function (e) {
                addToken(e.token.value);
            }).on('removeToken', function (e) {
                removeToken(e.token.value);
            });

            function addToken(token) {
                if (initialized) {
                    // $apply() to trigger dirty checking
                    // because of 3rd-party callback
                    scope.$apply(function() {
                        scope.tokenfield.tags.push(token);
                    });
                }
            }

            function removeToken(token) {
                if (initialized) {
                    // $apply() to trigger dirty checking
                    // because of 3rd-party callback
                    scope.$apply(function() {
                        var tags    = scope.tokenfield.tags,
                            i       = tags.length;
                        while(i--) {
                            if (token === tags[i]) {
                                tags.splice(i, 1);
                                break;
                            }
                        }
                    });
                }
            }

            function init() {
                if (angular.isDefined(scope.tokenfield.tags)) {
                    if (scope.tokenfield.tags.length > 0) {
                        // this call emits an 'afterCreateToken' event
                        // and this would imply a 'digest already in progress'
                        // without the initialized flag
                        elem.tokenfield('setTokens', scope.tokenfield.tags);
                    }
                }
                else {
                    scope.tokenfield.tags = [];
                }

                initialized = true;
            }

            init();
        }
    }
});
