// import express
var express = require('express');

// init express app
var app = express();

// tell express to use body parser
app.use(express.bodyParser());

// define a global application object
var SERVER = {};

// define some default books
SERVER.__initBooks = [
    {
        title: 'JavaScript für Enterprise-Entwickler',
        subtitle: 'Professionell programmieren im Browser und auf dem Server',
        isbn: '978-3-89864-728-1',
        abstract: 'JavaScript ist längst nicht mehr nur für klassische Webprogrammierer interessant.',
        numPages: 302,
        author: 'Oliver Ochs',
        publisher: {
            name: 'dpunkt.verlag',
            url: 'http://dpunkt.de/'
        },
        tags: [
            'javascript', 'enterprise', 'nodejs', 'web', 'browser'
        ]
    },
    {
        title: 'Node.js & Co.',
        subtitle: 'Skalierbare, hochperformante und echtzeitfähige Webanwendungen professionell in JavaScript entwickeln',
        isbn: '978-3-89864-829-5',
        abstract: 'Nach dem Webbrowser erobert JavaScript nun auch den Webserver.',
        numPages: 334,
        author: 'Golo Roden',
        publisher: {
            name: 'dpunkt.verlag',
            url: 'http://dpunkt.de/'
        },
        tags: [
            'javascript', 'nodejs', 'web', 'realtime', 'socketio'
        ]
    },
    {
        title: 'CoffeeScript',
        subtitle: 'Einfach JavaScript',
        isbn: '978-3-86490-050-1',
        abstract: 'CoffeeScript ist eine junge, kleine Programmiersprache, die nach JavaScript übersetzt wird.',
        numPages: 200,
        author: 'Andreas Schubert',
        publisher: {
            name: 'dpunkt.verlag',
            url: 'http://dpunkt.de/'
        },
        tags: [
            'coffeescript', 'web'
        ]
    }
];


// some helper functions
SERVER.deepCopy = function(obj) {
    // quick and dirty deep copy
    return JSON.parse(JSON.stringify(obj));
};

SERVER.getBookByIsbn = function (isbn) {
    for (var i = 0, n = SERVER._books.length; i < n; i++) {
        if (isbn === SERVER._books[i].isbn) {
            return SERVER._books[i];
        }
    }

    return null;
};

SERVER.getTags = function () {
    var obj = {},
        tag;

    for (var i = 0, n = SERVER._books.length; i < n; i++) {
        for (var j = 0, m = SERVER._books[i].tags.length; j < m; j++) {
            tag = SERVER._books[i].tags[j];
            if (!obj.hasOwnProperty(tag)) {
                obj[tag] = true;
            }
        }
    }

    return Object.keys(obj);
};

SERVER.updateBook = function(book) {
    for (var i = 0, n = SERVER._books.length; i < n; i++) {
        if (book.isbn === SERVER._books[i].isbn) {
            SERVER._books[i] = book;
            return book;
        }
    }

    return null;
};

SERVER.deleteBookByIsbn = function(isbn) {
    var i = SERVER._books.length;
    while (i--) {
        if (isbn === SERVER._books[i].isbn) {
            return SERVER._books.splice(i, 1);
        }
    }

    return null;
};

// set cors headers for all requests
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, X-XSRF-TOKEN");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// define an API to allow to restore the default books
app.get('/api/reset', function (req, res) {
    SERVER._books = SERVER.deepCopy(SERVER.__initBooks);
    res.json(SERVER._books);
});

// define REST resources
app.get('/api/books', function (req, res) {
    res.json(SERVER._books);
});

app.get('/api/tags', function (req, res) {
    res.json(SERVER.getTags());
});

app.get('/api/books/:isbn', function (req, res) {
    var book = SERVER.getBookByIsbn(req.params.isbn);

    if (book) {
        res.json(book);
    }
    else {
        res.statusCode = 404;
        res.send('Book not found!');
    }
});

app.post('/api/books', function(req, res) {
    SERVER._books.push(req.body);
    res.json(true);
});

app.put('/api/books/:isbn', function(req, res) {
    var book = SERVER.updateBook(req.body);

    if (book) {
        res.json(true);
    }
    else {
        res.statusCode = 404;
        res.send('Book not found!');
    }
});

app.delete('/api/books/:isbn', function(req, res) {
    var book = SERVER.deleteBookByIsbn(req.params.isbn);

    if (book) {
        res.json(true);
    }
    else {
        res.statusCode = 404;
        res.send('Book not found!');
    }
});

// load default books
SERVER._books = SERVER.deepCopy(SERVER.__initBooks);

// start listening
app.listen(process.env.PORT || 4730);
