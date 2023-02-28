const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const questions = require("./questions")
const render = require("./src/page-template.js");
const { takeCoverage } = require("v8");

// empty team array to add new employees
let myArrayOfTeamMembers = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const promptForManager = () => {

inquirer
  .prompt(questions.addEmployee("manager"))
  .then((response) => {
    // populate manager info
    const newManager = new Manager(response.name, response.id,response.email,response.officeNumber);
    myArrayOfTeamMembers.push(newManager)
    menu();
  });
}


const menu = function() {
  inquirer
    .prompt(questions.menu)
    .then((response) => {
      console.log(response)
      if (`${response.newChoice}` === "Add an engineer") {
        promptForEngineer();
      }
      else if (`${response.newChoice}` === "Add an intern") {
        promptForIntern();
      } 
      else {
        //    use the functionality from page-template to generate the team
      generateTeam()
      }
    });
};

const promptForEngineer = () => {

  inquirer
    .prompt(questions.addEmployee("engineer"))
    .then((response) => {
      const newEngineer = new Engineer (response.name, response.id,response.email,response.gitHub);
      // add new engineer to employees array
      myArrayOfTeamMembers.push(newEngineer);
      menu();
    });
};

const promptForIntern = () => {
  inquirer
    .prompt(questions.addEmployee("intern"))
    .then((response) => {
      const newIntern = new Intern (response.name, response.id,response.email,response.school);
      // add new engineer to employees array
      myArrayOfTeamMembers.push(newIntern);
      menu();
    });
};

const generateTeam = () => {
  var htmlTemplate = render(myArrayOfTeamMembers);
  // console.log(htmlTemplate)

  //write it with FS writeFile
 fs.writeFile('team.html', htmlTemplate, function(err) {
  if(err) {
    return console.log(err);
}
console.log("The file was saved!");
 })
}
