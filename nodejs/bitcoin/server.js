'use strict';

const ws = require('ws')


const wss = new ws.Server({
  port: 8080
});

let bitcoin = {
    cours: 4621
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

wss.on('connection', (ws) => {
  ws.send('You are connecting on the bitcoin TP')
  ws.on('message', function incoming(data) {
    if (data === 'bitcoin-cours') {
        const randomNumber = getRandomInt(2);
        if (randomNumber === 0) {
            bitcoin.cours = Math.floor(bitcoin.cours - (bitcoin.cours * Math.random()));
        } else {
            bitcoin.cours = Math.floor(bitcoin.cours + (bitcoin.cours * Math.random()));
        }
        if(bitcoin.cours === 0) {
          bitcoin.cours = 4621
        }
        ws.send(bitcoin.cours);
    }
  });
});

