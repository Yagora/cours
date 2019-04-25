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
    console.log('2)Winterfall : ' + winterfall);
  } else {
    console.log('1)Winterfall : ' + winterfall);
    console.log('2)Whitwalkers : ' + whitwalkers);
  }

}

wss.on('connection', (ws) => {
  ws.send('welcome to the battle')
  ws.on('message', function incoming(data) {
    console.log(data)
    if (data === 'whitewalker') {
      whitwalkers++;
    } else if (data === 'winterfall') {
      winterfall++;
    }
    showScore();
  });
});



