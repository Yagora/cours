'use strict';

const app = require('express')();
const PORT = 5000;

app.set("view engine","jade")

app.get('/', function (req, res) {
    res.render('sample');

});

app.listen(PORT, function () {
    console.log('Node server is running on ', PORT);
});