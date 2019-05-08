'use strict';

const ws = require('ws')


const wss = new ws.Server({
  port: 8080
});

let whitwalkers = 0;
let winterfall = 0;

function showScore() {
  console.log('-------------SCORE-----------------')
  if (whitwalkers > winterfall) {
    console.log('1)Whitwalkers : ' + whitwalkers);
    console.log('2)Winterfell : ' + winterfall);
  } else {
    console.log('1)Winterfell : ' + winterfall);
    console.log('2)Whitwalkers : ' + whitwalkers);
  }

}

wss.on('connection', (ws) => {
  ws.send('welcome')
  ws.on('message', function incoming(data) {
    console.log(data);
    if (data === 'whitewalker') {
      whitwalkers++;
      showScore();
    } else if (data === 'winterfell') {
      winterfall++;
      showScore();
    }
  });
});



console.log('10.69.1.156:8080')