# Team Profile Generator

## Description

This command-line application, which uses Node.js, takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. The starter code includes tests and each part of the code needs to pass the test.
The application uses [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

## Usage

To generate the questions, you will need to run 'node index.js'


## How it works

    * When a user starts the application then they are prompted to enter the **team manager**’s:
      * Name
      * Employee ID
      * Email address
      * Office number
    * When a user enters those requirements then the user is presented with a menu with the option to:
      * Add an engineer
      * Add an intern 
      * Finish building the team
    * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Engineer's Name
      * ID
      * Email
      * GitHub username
    * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
      * Intern’s name
      * ID
      * Email
      * School
    * When a user decides to finish building their team then they exit the application, and the HTML is generated.
  
The rendered html should look like ![this](./Assets/14-object-oriented-programming-challenge-demo.png)

## Notes 

My programme doesn't currently the Manager, which is something I am working on.