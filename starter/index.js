const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer.prompt([{
    //manager questions
    type: "input",
    message: "What is your name?",
    name: "name",
},
{
    type: "input",
    message: "What is your manager id?",
    name: "id",
},
{
    type: "input",
    message: "What is your manager email?",
    name: "email",

},
{
    type: "input",
    message: "What is your office number?",
    name: "email",
}
]).then(response => {
    // populate manager info
    promptForNexEmployee ()
})

const promptForNextEmployee = () => {
    inquirer.prompt([{
        // choice of 3
        type: "list",
        message: "Do you want to choose another employee?",
        name: "newChoice",
        choices: ["Add an engineer", "Add an intern", "Finish building the team"],
    }]).then(response => {
        if (`${response.choices[0]}`) {
           promptForEngineer()
        }
        if (`${response.choices[1]}`) {
            promptForIntern()
         }
        else
        //    use the functionality from page-template to generate the team
    })
}

const promptForEngineer = () => {
    inquirer.prompt([{
        //engineer questions
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your engineer id?",
        name: "id",
    },
    {
        type: "input",
        message: "What is your engineer email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "email",
    }]).then(response => {
        // add new engineer to employees array
        promptForNextEmployee()
    })
}

const promptForIntern = () => {
    inquirer.prompt([{
        //intern questions
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your intern id?",
        name: "id",
    },
    {
        type: "input",
        message: "What is your intern email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your school?",
        name: "school",
    
    }]).then(response => {
        // add new intern to employees array
        promptForNextEmployee()
    })
}

const buildPage = (answers) => {
    render(myArrayOfTeamMembers)
}