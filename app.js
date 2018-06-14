console.log("starting app");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");


const argv = yargs.argv;

const notes = require("./notes.js");


var command =argv._[0];

console.log("Command :", command);
console.log("Yargs : " , argv);



if (command === "add") {
  // Accessing from NotesJS
 var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log('Note created')
    console.log('---');
    console.log(`Title : ${note.title} `);
    console.log(`Body ${notes.body} `);
  }
  else{
    console.log('Title taken');
  }
} else if (command === "list") {
notes.getAll();
} else if (command === "read") {
  notes.getNote(argv.title);
} else if (command === "remove") {
  notes.removeNote(argv.title);
} else {
  console.log("Not recognized");
}
