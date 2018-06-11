console.log('starting app');

const fs  = require('fs');
const os = require('os');
const notes = require('./notes.js');


console.log('Result: ',  notes.addFunction(9, -2));

// var user = os.userInfo();
// fs.appendFileSync('greetings.txt', `Hello ${user.username} ! you are ${notes.age} `, function (err){
//     if(err){
//         console.log('Error');
//     }
// });