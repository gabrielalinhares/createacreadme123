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
        type:"input", 
        name:"description",
        message: "Describe your work"
                    
        },
    {
        type:"input", // because the user will write the answer
        name:"username",
        message: "what is your username?"
            
        },

    {
        type:"input", 
        name:"Pinstall",
        message: "Write here how to install your project"
                
        },
    {
        type:"input", 
        name:"Usage",
        message: "what is the usage of your project?"
                    
        },

     {
        type:"checkbox", 
        name:"licence",
        message: "what is your license ?",
        choices: ['MIT','Apache','GPL', 'ISC']
                    
        },
    {
        type:"input", 
        name:"contributors",
        message: "who contributed to your project?"
                    
        },
    {
        type:"input", 
        name:"test",
        message: "Write here your test instructions"
                    
        },
    {
        type:"input", 
        name:"gitlink",
        message: "what is your github profile link?"
                    
        },
   {
        type:"input", 
        name:"email",
        message: "please write your e-mail"
                    
        },

];

// TODO: Create a function to write README file 
// TODO: Create a function to initialize app // start the application and run the questions 
function init() {
inquirer.prompt(
    questions

).then(function (answers){ // showing the answers for testing 
console.log(answers) // variable answers 
console.log(answers.title)
    return `# ${answers.title}
  ## Description
  ${answers.description}
  Link to project: ${answers.gitlink}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  ## Installation
  ${answers.Pinstall}
  ## Usage
  ${answers.usage}
  ## Credits
  Collaborators' GitHub Usernames: ${answers.collaborators}
  ## License
  ${answers.license}
  ## Contributors
  ${answers.contributors}
  ## How to Test
  ${answers.test}
  If you have any questions, please contact me at GitHub username <a href="https://github.com/${answers.username}">$answers.username}</a> or by e-mail :
  ${answers.email}
  `;
})};

    fs.writeFile("README.md", createReadMe(answers), function (err) {
      if (err) {
        console.error(err);
        throw err;
      }
      console.log(
        "README created!"
      );
    })

// Function call to initialize app // calling function 
init();

generatemarkdown();
