// we get all the test files automatically
var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/spec\.js$/i.test(file)) {
            tests.push(file);
        }
    }
}

require.config({
    paths: {
        angular: '//ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular',
        angularRoute: '//ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular-route',
        angularMocks: '//ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular-mocks'

    },
    baseUrl: '/base/app/scripts/',
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
        'angularMocks': {
            deps:['angular'],
            'exports':'angular.mock'
        }
    },
    deps: tests,
    callback: window.__karma__.start
});