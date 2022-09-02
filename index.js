// TODO: Include packages needed for this application
const inquirer = require("inquirer"); // installs the inquirer package that is already installed on the package.json
const fs = require("fs") // library to create files ( pre default library)
const  generateMarkdown = require("./utils/generateMarkdown")
console.log(generateMarkdown)
// TODO: Create an array of questions for user input 
const questions = [

    {
        type:"input", // because the user will write the answer
        name:"title",
        message: "what is the title of your project?"
        
        },
        {
            type:"input", // because the user will write the answer
            name:"username",
            message: "what is your username?"
            
            },



];

// TODO: Create a function to write README file 
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app // start the application, its the only function being called 
function init() {
inquirer.prompt(
    questions

).then(function (answers){
console.log(answers) // variable answers 
console.log(answers.title)

}) 

}

// Function call to initialize app // calling function 
init();

// clue, look to the activities fs.writefile => function / method that creates the file. 
// generatemarkdown() 
