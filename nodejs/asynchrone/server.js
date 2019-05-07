'use strict';

const readline = require('readline');
const request = require('request');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
    request('https://jsonplaceholder.typicode.com/users', (error, response, body) => {
        const data = JSON.parse(body);
        console.log(data[0]);

    });
    console.log(`Thank you for your valuable feedback: ${answer}`);
  
    rl.close();
});