'use strict';

const app = require('express')();
const PORT = 5000;
const request = require('request');

app.get('/users/:name', function (req, res) {
    request('https://jsonplaceholder.typicode.com/users', (error, response, body) => {
        let user = JSON.parse(body).find(u => u.name === req.params.name);
        console.log(req.params)
        if (!user) {
            console.log('Utilisateur inconnu');
            res.send(404, 'Not Found');
            res.end();
            return;
        }
        res.send(201, 'User Found');
    });
});


app.listen(PORT, function () {
    console.log('Node server is running on ', PORT);
});

module.exports = app;