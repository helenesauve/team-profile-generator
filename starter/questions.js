const questions = {
  addEmployee: function (employeeType) {
    const base = [
      {
        //manager questions
        type: "input",
        message: `What is your ${employeeType} name?`,
        name: "name",
      },
      {
        type: "input",
        message: `What is your ${employeeType} id?`,
        name: "id",
      },
      {
        type: "input",
        message: `What is your ${employeeType} email?`,
        name: "email",
      },
    ];

    if (employeeType == "manager") {
      base.push({
        type: "input",
        message: "What is your office Number?",
        name: "officeNumber",
      });
    }
    if (employeeType == "engineer") {
      base.push({
        type: "input",
        message: "What is your Github username?",
        name: "gitHub",
      });
    }
    if (employeeType == "intern") {
      base.push({
        type: "input",
        message: "What is your school?",
        name: "school",
      });
    }

    return base;
  },
  menu: [
    {
      // choice of 3
      type: "list",
      message: "Do you want to choose another employee?",
      name: "newChoice",
      choices: ["Add an engineer", "Add an intern", "Finish building the team"],
    },
  ],
};

module.exports = questions;
