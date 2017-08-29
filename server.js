const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};

app.use(allowCrossDomain);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.listen(PORT, error => {
    error
        ? console.error(error)
        : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});
