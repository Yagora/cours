'use strict';

new Promise((resolve, reject) => {
    console.log('coucou je suis dans ma promesse');
    setTimeout(function () {
        resolve('c resolu wesh');
    }, 2000)
}).then(value => {
    console.log(value)
   
    return 'on est dans le then weshh';
}).then(value2 => {
    console.log(value2)
}).catch(e => {
    console.log(e)
});