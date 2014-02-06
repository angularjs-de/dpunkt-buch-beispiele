"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MyCtrl', function(log) {
    log.debug('MyCtrl has been invoked!');
});

angular.module('myApp').factory('log', function () {
    // Service Implementation
    var log = function (level, message) {
        console.log('[' + level + '] ' + message);
    };

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
});
