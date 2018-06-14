console.log("File is running");

const fs = require("fs");

const fetchNotes = () => {
  // Defined because if the file doesn't exist it will crash
  // It will also try to read, if it fails it will create a new json
  // because notes is already defined before that!as empty array
  try {
    // in order to store the data before push
    var notesString = fs.readFileSync("notes-data.json");
     return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {

    // writes in notes-data.json a stringified array .
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body,
  };
  // check if there's duplicates in the array
  var duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    //Adds to Array of notes a note
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log("Getting all notes");
};

var getNote = (title, body) => {
  console.log("Reading note ", title);
};

var removeNote = (title, body) => {
  console.log("Removing note", title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote

  // or just delete : AddNote
};
