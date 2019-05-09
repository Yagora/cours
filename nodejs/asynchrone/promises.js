'use strict';
const request = require('request');

new Promise((resolve, reject) => {
    request('https://jsonplaceholder.typicode.com/users', (error, response, body) => {
        let users = JSON.parse(body);
        resolve(users);
    });
}).then(v => {
    console.log(v);
})
.catch(e => {
    console.log('ERREURRRRRRRr ARHHH')
    console.log(e instanceof Error )
    throw e;
});



