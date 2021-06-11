// Import requirements

const inquirer = require('inquirer')
const chalk = require("chalk")

// Define Colors

const green = chalk.green
const special = chalk.black.bgGreen

// Function to ask questions about and define properties of the Employee object, push the object into
// the passed in list object, and run a callback function

function askEmployeeInfo(employee, list, callback) {
    const questions = [
        {
            type: "input",
            message: green("What is the employee's name?"),
            name: "name",
        },
        {
            type: "input",
            message: green("What is the employee's ID number?"),
            name: "id",
        },
        {
            type: "input",
            message: green("What is the employee's Email Adress?"),
            name: "email",
        },
        {
            type: "input",
            message: green("What is the employee's office number?"),
            name: "extra",
        }
    ]
    if(employee.role === "Intern") {
        questions[3].message = green("What school did this intern go to?")
    }
    else if(employee.role === "Engineer") {
        questions[3].message = green("Enter a link to the employee's GitHub account.")
    }
    inquirer.prompt(questions).then((response) => {
        const {name, id, email, extra} = response;
        employee.populateData(name, id, email, extra);
        list.employees.push(employee);
        callback(list)
    })
}

// Function to choose a new Employee type or finalize the List object

function nextEmployee(list, callback) {
    inquirer.prompt(
        {
            type: "list",
            message: special(" Add another employee? "),
            choices: ["Engineer", "Intern", "Done Adding Employees"],
            name: "type"
        }).then((response) => {
            if(response.type === "Done Adding Employees") {
                list.finalized = true;
                callback(list);
            }
            else {
                callback(response.type)
            }
        })
}


module.exports = { askEmployeeInfo, nextEmployee }