'use strict';
const request = require('request');
const answer = 'Chelsey Dietrich';

let user;
let posts;
let comments;


function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max))
}


new Promise((resolve, reject) => {
    request('https://jsonplaceholder.typicode.com/users', (error, response, body) => {
        let users = JSON.parse(body);
        user = JSON.parse(body).find(u => u.name === answer);
        if (!user) {
          reject('Utilisateur inconnu');
        }
        resolve(user)
    });
}).then(u => {
    return new Promise((resolve, reject) => {
        request('https://jsonplaceholder.typicode.com/posts', (error, response, body) => {
            posts = JSON.parse(body).filter(p => p.userId === u.id);
            const postId = posts[getRandomNumber(posts.length - 1)].id;
            resolve(postId);
        });
    }) 
}).then(postId => {
    request(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, (error, response, body) => {
        comments = JSON.parse(body);
        console.log(comments[getRandomNumber(comments.length - 1)]);
    });
})
.catch(e => {
    console.log('ERREURRRRRRRr ARHHH')
    console.log(e instanceof Error )
    throw e;
});



