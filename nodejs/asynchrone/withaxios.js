'use strict';

const readline = require('readline');
const axios = require('axios');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let user;
let posts;
let comments;

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

rl.question('Choisis un nom prénom :', (answer) => {
  axios.all([
    axios.get('https://jsonplaceholder.typicode.com/users'),
    axios.get('https://jsonplaceholder.typicode.com/posts')
  ])
    .then(axios.spread((users, allPosts) => {
      user = users.data.filter(u => u.name === answer);
      if (user.length === 0) {
        console.log('Utilisateur inconnu');
        rl.close();
        return;
      }
      posts = allPosts.data.filter(p => p.userId === user[0].id);
      const postId = posts[getRandomNumber(posts.length - 1)].id;
      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => {
          comments = response.data;
          console.log(comments[getRandomNumber(comments.length - 1)]);
        });
    }))
    .catch(error => {
      console.log(error);
    });

  rl.close();
});