//const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')




// const log = console.log;

//log(chalk.red('Error!'));

//Customize yargs version 
yargs.version('1.1.0')
 
 //Create add command 
 yargs.command({
     command: 'add',
     describe: 'Add a new note',
     builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
     },
     handler (argv) {
         notes.addNote(argv.title, argv.body)
     }
 })

//Create list command 
  yargs.command({
    command: 'list',
    describe: 'List note',
    handler () {
        notes.listNotes()
    }
})

//Create read command 
 yargs.command({
    command: 'read',
    describe: 'Reading note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
     },
    handler (argv) {
        notes.readNote(argv.title)
    }
})

 //Create remove command 
 yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
     },
     handler (argv) {
         notes.removeNote(argv.title)
     }
})
yargs.parse()
//console.log(process.argv);
//console.log(yargs.argv);
// const command = process.argv[2];

// if (command === 'add'){
//     console.log('adding notes');
// }
// else if(command === 'remove'){
//     console.log('removing notes');
// }

// const currentNotes = notes()

// console.log(currentNotes);

// console.log(validator.isURL('https://v3.stemsoftware.com'))
// const total = require('./utils.js');
// const add = total(5,7)
// console.log(add);
