let readline = require('readline');
let request = require('request');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let user;

rl.question('Qui êtes vous ? ', (answer) => {
  request('https://jsonplaceholder.typicode.com/users', (error, response, body) => {
    user = JSON.parse(body).filter(u => u.name === answer);
    rl.question('Comment vous voulez appeler la nouvelle tâche ? ', (answer) => {
        request.post({
            url: 'https://jsonplaceholder.typicode.com/todos/',
            body: JSON.stringify({
                userId: user.id,
                title: answer
            })
        }, (error, response, body) => {
            console.log('La nouvelle tâche a été créée !')
            rl.close();
        });
    });
  });
});
