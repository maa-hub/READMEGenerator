// TODO: Include packages needed for this application
const fs = require("fs");
// require inquirer
const inquirer = require("inquirer");
// require generatemarkdown package
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "gitHubName",
            message: "What is your github username? (Required)",
            validate: (gitHubNameInput) => {
                if (gitHubNameInput) {
                    return true;
                } else {
                    console.log("Enter a required GitHub username!");
                    return false;
                }
            },
        },

        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        },

        {
            type: "input",
            name: "gitHubRepo",
            message: "What is the name of the repository (Required)",
            validate: (gitHubRepoInput) => {
                if (gitHubRepoInput) {
                    return true;
                } else {
                    console.log("Please enter the name of your repository!");
                    return false;
                }
            },
        },

        {
            type: "input",
            name: "projectTitle",
            message: "What is the name of the project? (Required)",
            validate: (projectTitle) => {
                if (projectTitle) {
                    return true;
                } else {
                    console.log("Please enter your project title!");
                    return false;
                }
            },
        },

        {
            type: "checkbox",
            name: "badges",
            message: "What badges would you like to display? (Check all that apply)",
            choices: [
                "Language Count",
                "Top Language",
                "Code Size",
                "Repo Size",
                "Issues",
                "Issues Closed",
                "Release Version by Date",
            ],
            default: ['Issues'],
        },
        {
            type: "input",
            name: "description",
            message: "Desribe your project. (Required)",
            validate: (description) => {
                if (description) {
                    return true;
                } else {
                    console.log("Please enter your project description!");
                    return false;
                }
            },
        },
        {
            type: "confirm",
            name: "confirmInstall",
            message:
                "Would you like to enter some information about how install your project?",
            default: false,
        },
        {
            type: "input",
            name: "projectInstall",
            message: "How can this project be installed?:",
            when: ({ confirmInstall }) => {
                if (confirmInstall) {
                    return true;
                } else {
                    return false;
                }
            },
        },

        {
            type: "input",
            name: "contributors",
            message: "Who are the contributors of this projects?"
        },

        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Open",
                "Apache",
                "GNU",
                "ISC",
                "Academic",
                "MIT",
                "Mozilla",
            ]
        },
        {
            type: "confirm",
            name: "confirmTest",
            message:
                "Would you like to enter information on how is this project tested??",
            default: false,
        },
        {
            type: "input",
            name: "test",
            message: "How is this project tested?:",
            when: ({ confirmTest }) => {
                if (confirmTest) {
                    return true;
                } else {
                    return false;
                }
            },
        },
    ]);
};
// TODO: Create a function to write README file

const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./utils/README.md', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(READMEData => {
            const fileContent = generateMarkdown(READMEData);
        })
}
// ask questions
// call generatemarkdown function which will return a string
// call writeto file function; 

// Function call to initialize app
init();
