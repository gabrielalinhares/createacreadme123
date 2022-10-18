// TODO: Include packages needed for this application
const inquirer = require("inquirer"); // installs the inquirer package that is already installed on the package.json
const fs = require("fs"); // library to create files ( pre default library)
const generateMarkdown = require("./utils/generateMarkdown"); // to add the badges
console.log(generateMarkdown);
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input", // because the user will write the answer
    name: "title",
    message: "what is the title of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "Describe your work",
  },
  {
    type: "input", // because the user will write the answer
    name: "username",
    message: "what is your username?",
  },

  {
    type: "input",
    name: "Pinstall",
    message: "Write here how to install your project",
  },
  {
    type: "input",
    name: "usage",
    message: "what is the usage of your project?",
  },

  {
    type: "list",
    name: "license",
    message: "what is your license ?",
    choices: ["MIT", "Apache", "GPL", "ISC", "none"],
  },
  {
    type: "input",
    name: "contributors",
    message: "who contributed to your project?",
  },
  {
    type: "input",
    name: "test",
    message: "Write here your test instructions",
  },
  {
    type: "input",
    name: "email",
    message: "please write your e-mail",
  },
];

// TODO: Create a function to write README file
// TODO: Create a function to initialize app // start the application and run the questions
function init() {
  inquirer.prompt(questions).then(function (answers) {
    // showing the answers for testing
    console.log(answers); // variable answers
    console.log(answers.title); // generatemarkdown()  below the title
    var template = `# ${answers.title} 
   
${licensebadge(answers.license)}  
 ## Description
  ${answers.description}
  Link to project: ${answers.gitlink}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)
  ## Installation
  ${answers.Pinstall}
  ## Usage
  ${answers.usage}
  ## License
  ${answers.license}
  ## Contributors
  ${answers.contributors}
  ## Test
  ${answers.test}
  ## Questions 
  If you have any questions, please contact me at GitHub username <a href="https://github.com/${
    answers.username
  }"> ${answers.username} </a> or by e-mail :
  ${answers.email}
  `;
    fs.writeFile("README.md", template, function (err) {
      if (err) {
        console.error(err);
        throw err;
      }
      console.log("README created!");
    });
  });
}
//choices: ['MIT','Apache','GPL', 'ISC','none']
function licensebadge(userlicense) {
  // here you can put anything
  if (userlicense === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else {
    if (userlicense === "Apache") {
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else {
      if (userlicense === "GPL") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      } else {
        if (userlicense === "ISC") {
          return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        } else {
          return " ";
        }
      }
    }
  }
}

// Function call to initialize app // calling function
init();

// clue, look to the activities fs.writefile => function / method that creates the file.
