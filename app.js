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
  notes.addNote(argv.title, argv.body);
} else if (command === "list") {
notes.getAll();
} else if (command === "read") {
  notes.getNote(argv.title);
} else if (command === "remove") {
  notes.removeNote(argv.title);
} else {
  console.log("Not recognized");
}
