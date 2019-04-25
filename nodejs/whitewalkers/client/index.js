'use strict';

const WebSocket = require('ws');

const wss = new WebSocket('ws://localhost:8080');

wss.on('open', function open(ws) {
  wss.on('message', function incoming(data) {
    console.log(data);
    wss.send('winterfall');
  });

});

