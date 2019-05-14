'use strict';

const readline = require('readline');
const db = {
    todo: [{
        name: 'Faire la vaiselle'
    }, {
        name: 'Aller faire les courses'
    }],
    inprogress: [{
        name: 'Galèrer sur le TP noté'
    }, {
        name: 'Faire le TP noté'
    }],
    done: [{
        name: 'Regarder GOT épisode 5'
    }]
};

let leave = false;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
async function main() {
    while(!leave) {
        await new Promise(resolve => {
            rl.question('Quel est votre choix ? ', function(answer) {
                switch(answer) {
                    case 'todo':
                        console.log('------Voici les tâches en TODO--------');
                        db.todo.forEach(element => {
                            console.log(element.name);
                        });
                        break;
                    case 'inprogress':
                        console.log('------Voici les tâches en INPROGRESS--------');
                        db.inprogress.forEach(element => {
                            console.log(element.name);
                        });
                        break;
                    case 'done':
                        console.log('------Voici les tâches en DONE--------');
                        db.done.forEach(element => {
                            console.log(element.name);
                        });
                        break;
                    case 'supprimerDone' :
                        console.log('------Les tâches en DONE sont supprimées--------');
                        db.done = [];
                        break;
                        case 'exit':
                    leave = true;
                    break;
                    default:
                        console.log('------Bienvenue dans l\'aide--------');
                        console.log('todo  : Voir les tâches à faire');
                        console.log('inprogress : Voir les tâches en cours');
                        console.log('done : Voir les tâches fini');
                        console.log('supprimerDone : Supprime toutes les tâches dans done');
                        console.log('help : Qui affiche une jolie aide ');
                }
                resolve();
            });
        });
    }
    rl.close();
}
main();