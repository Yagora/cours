'use strict';

const readline = require('readline');
const request = require('request');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let user;
let userId
let posts;
let comments;

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

rl.question('Choisis un nom prénom :', (answer) => {
  request('https://jsonplaceholder.typicode.com/users', (error, response, body) => {
    user = JSON.parse(body).filter(u => u.name === answer);
    if (user.length === 0) {
      console.log('Utilisateur inconnu');
      rl.close();
      return;
    }
    userId = user[0].id;
    request('https://jsonplaceholder.typicode.com/posts', (error, response, body) => {
      posts = JSON.parse(body).filter(p => p.userId === userId);
      const postId = posts[getRandomNumber(posts.length - 1)].id;
      request(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, (error, response, body) => {
        comments = JSON.parse(body);
        console.log(comments[getRandomNumber(comments.length - 1)]);
      });
    });
  });


  rl.close();
});