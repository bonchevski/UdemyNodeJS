// // var obj = {
// //     name: 'Victor',
// // };

// // var stringObj = JSON.stringify(obj);    
// // console.log(typeof stringObj);
// // console.log(stringObj);

// var personString = '{"name" : "Victor", "age": 22}';
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

const fs = require ('fs');

var originalNote = {
    title: 'Some title',
    body: 'Nice body',
};
console.log(typeof originalNote);
console.log(originalNote);
//originalNotesString
var originalNoteString = JSON.stringify(originalNote);
console.log(typeof originalNoteString);
console.log(originalNoteString);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
// note

var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note);