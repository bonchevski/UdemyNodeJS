console.log("starting app");

const fs = require("fs");
const _ = require("lodash");

const notes = require("./notes.js");
console.log(process.argv);

var command = process.argv[2];

console.log("Command :", command);

if (command === "add") {
  console.log("Adding new note");
} else if (command === "list") {
  console.log("listing all notes");
} else if (command === "read") {
  console.log("reading note");
} else if (command === "remove") {
  console.log("Removing Note");
} else {
  console.log("Not recognized");
}
