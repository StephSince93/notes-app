const fs = require('fs');
const chalk = require('chalk')

const listNotes = () => {  
    const notes = loadNotes()
    console.log(chalk.inverse.green('Your Notes!'))
      notes.forEach((note) => {
        console.log(note.title);
    })
    //console.log(notes)
}

const readNote = (title) => {  
    const notes = loadNotes()
    console.log(title)
    console.log(notes)
    const noteFound = notes.find((note) => { return note.title === title })
    if(noteFound!==undefined){
        console.log(chalk.underline.green(noteFound.title)+ ' ' + noteFound.body)
    }
    else{
        console.log(chalk.inverse.red('No note found!'))

    }
    
}

const addNote = (title,body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => { note.title === title})

    if(!duplicateNote){
        notes.push({
        title: title,
        body: body
    })
    console.log(notes)
    saveNotes(notes);
    }
    
    
}

const saveNotes = (notes) =>{

    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
} 

const removeNote = function(title) {
    const notes = loadNotes()
    var foundNote = false;
    //const log = console.log;
    const updatedNotes = notes.filter(function(note) {

        if(note.title === title){
            console.log('here')
            foundNote = true;
        }
        return note.title !== title
    })
    console.log(updatedNotes)
    saveNotes(updatedNotes);

    if(foundNote){
        console.log(chalk.green('Note Removed!'))
    }
    else{
        console.log(chalk.red('No Note Found!'))
    }
}
module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
};