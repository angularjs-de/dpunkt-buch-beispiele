"use strict";

angular.module('myApp', []);

angular.module('myApp').provider('log', function () {
    /* Private state/methods */
    var prefix = '',
        suffix = '';

    // Service Implementation
    var log = function (level, message) {
        console.log(prefix + '[' + level + '] ' + message + suffix);
    };

    /* Public state/methods */
    // Configuration methods / Public methods
    this.setPrefix = function (newPrefix) {
        prefix = newPrefix;
    };

    this.setSuffix = function (newSuffix) {
        suffix = newSuffix;
    };

    this.$get = function () {
        // Public API
        return {
            error: function (message) {
                log('ERROR', message);
            },
            info: function (message) {
                log('INFO', message);
            },
            debug: function (message) {
                log('DEBUG', message);
            }
        };
    };
});

angular.module('myApp').config(function(logProvider) {
    logProvider.setPrefix('[myApp]');
    logProvider.setSuffix('.');
});

angular.module('myApp').controller('MyCtrl', function(log) {
    log.debug('MyCtrl has been invoked');
});
