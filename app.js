/**
 * Created by ragini on 12/06/2016.
 */
var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('learning automated testing');
});

app.listen(process.env.PORT || 5000);

module.exports = app;