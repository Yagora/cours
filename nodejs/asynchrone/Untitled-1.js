'use strict';

const readline = require('readline');
const request = require('request');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let user;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

rl.question('Choisis un prenom nom ', (answer) => {
    request('https://jsonplaceholder.typicode.com/users', function (__, ___, body) {
        const users = JSON.parse(body);
        user = users.find(u => u.name === answer);
        if(!user) {
            console.log('404 User not found')
            return;
        }
        request('https://jsonplaceholder.typicode.com/posts', function (__, ___, body) {
            const posts = JSON.parse(body);
            let userPosts = posts.filter(p => p.userId === user.id);
            let post = userPosts[getRandomInt(userPosts.length)]
            request(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`, function (__, ___, body) {
                const comments = JSON.parse(body);
                console.log(comments[getRandomInt(comments.length)])
                
            });
        });
    });

    rl.close();
});