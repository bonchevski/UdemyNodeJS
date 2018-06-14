console.log('File is running');

var addNote  = (title, body) =>{
   console.log('Adding note', title, body); 
};

var getAll = () => {
    console.log('Getting all notes')
};

var getNote = (title, body) => {
    console.log("Reading note " , title);
};

var removeNote = (title, body) =>{
    console.log('Removing note' , title );
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,

    // or just delete : AddNote
};