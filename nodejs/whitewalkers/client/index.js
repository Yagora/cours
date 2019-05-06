'use strict';

const WebSocket = require('ws');

const wss = new WebSocket('ws://10.69.1.156:8080');

wss.on('open', function open(ws) {
  
  wss.send('kikou');

});

wss.on('message', function incoming(data) {
  console.log(data);
});