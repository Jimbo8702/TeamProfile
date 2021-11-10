const fs = require("fs");
const inquirer = require("inquirer");

const Employee = require("./test/employee.js");
const Engineer = require("./test/Engineer.js");
const Intern = require("./test/inter.js");
const Manager = require("./test/manager.js");

function makeEngineer() {
  console.log("Now creating Engineer...");
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your Engineers id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your Engineers Email?",
        name: "email",
      },
      {
        type: "type",
        message: "What is your Engineers Github?",
        name: "github",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.id,
        response.email,
        response.github
      );
      console.log(engineer.id);
      console.log(engineer.email);
      console.log(engineer.github);
      addAnother();
      const html = `<div class="card" style="width: 18rem;">
      <div class="card-header">
        Engineer
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> Id: ${engineer.id}</li>
        <li class="list-group-item"> Email: ${engineer.email}</li>
        <li class="list-group-item"> Github: ${engineer.github}</li>
      </ul>
    </div>`;
      fs.appendFile("index.html", html, (err) => {
        if (err) {
          throw err;
        }
      });
    });
}
function makeInter() {
  console.log("Now creating Intern...");
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your Interns id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your Inters Email?",
        name: "email",
      },
      {
        type: "type",
        message: "What is your Inters School?",
        name: "school",
      },
    ])
    .then((response) => {
      const intern = new Intern(response.id, response.email, response.school);
      console.log(intern.id);
      console.log(intern.email);
      console.log(intern.school);
      addAnother();
      const html = `<div class="card" style="width: 18rem;">
      <div class="card-header">
        Intern
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> Id: ${intern.id}</li>
        <li class="list-group-item"> Email: ${intern.email}</li>
        <li class="list-group-item"> Github: ${intern.github}</li>
      </ul>
    </div>`;
      fs.appendFile("index.html", html, (err) => {
        if (err) {
          throw err;
        }
      });
    });
}
function makeManager() {
  console.log("Now creating Manager...");
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your Managers id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your Managers Email?",
        name: "email",
      },
      {
        type: "type",
        message: "What is your Managers office number?",
        name: "office",
      },
    ])
    .then((response) => {
      const manager = new Manager(response.id, response.email, response.office);
      console.log(manager.id);
      console.log(manager.email);
      console.log(manager.office);
      addAnother();
      const html = `<div class="card" style="width: 18rem;">
      <div class="card-header">
        Manager
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> Id: ${manager.id}</li>
        <li class="list-group-item"> Email: ${manager.email}</li>
        <li class="list-group-item"> Github: ${manager.office}</li>
      </ul>
    </div>`;
      fs.appendFile("index.html", html, (err) => {
        if (err) {
          throw err;
        }
      });
    });
}
function newEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What Employee would you like to add",
        choices: ["Engineer", "Intern", "Manager"],
        name: "name",
      },
    ])
    .then((response) => {
      if (response.name === "Engineer") {
        makeEngineer();
      } else if (response.name === "Intern") {
        makeInter();
      } else if (response.name === "Manager") {
        makeManager();
      }
    });
}
function addAnother() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add another",
        choices: ["Yes", "No"],
        name: "choice",
      },
    ])
    .then((response) => {
      if (response.choice === "Yes") {
        newEmployee();
      } else {
        console.log("Checkout your new Employee page!");
      }
    });
}
function makePage() {
  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div
        class="card-container"
        style="
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        "
      ></div>
    </body>
  </html>`;
  fs.writeFile("index.html", html, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}
makePage();
newEmployee();
