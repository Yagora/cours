'use strict';

const app = require('express')();
const PORT = 5000;
const WebSocket = require('ws');

const wss = new WebSocket('ws://localhost:8080');

let bitcoinCours = 0;

wss.on('open', function open(ws) {
  
    wss.send('bitcoin-cours');
  
});

wss.on('message', function incoming(data) {
    bitcoinCours = data;
});

app.set("view engine","jade")

app.get('/', function (req, res) {
    res.render('sample', {
        bitcoinCours: bitcoinCours
    });

});

app.get('/bitcoin', function (req, res) {
    wss.send('bitcoin-cours');
    setTimeout(function (){
        res.send(200, bitcoinCours);
    }, 2000)
});

app.get('/javascript', function (req, res) {
    res.sendFile(__dirname + '/views/javascript.js');
});


app.listen(PORT, function () {
    console.log('Node server is running on ', PORT);
});