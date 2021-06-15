// Import requirements

const { nextEmployee, askEmployeeInfo, initQuestion } = require('./assets/questions.js')
const Employee = require("./assets/employee.js")
const List = require("./assets/employeelist")
const generateHtml = require("./assets/generateHTML.js")
const chalk = require("chalk")

// Create object for list of employees

const employeeList = new List();

// Function to check responses from nextEmployee and askEmployeeInfo and route the program accordingly
// When an unfinalized List instance is passed, nextEmployee is ran
// When a finalized List instance is passed, the List is formatted and formatHTML is ran
// When a role type is passed, a new employee is created with that role and askEmployeeInformation is ran

function questionsCallback(data) {
    if (data instanceof List) {
        if (data.finalized) {
            employeeList.formatEmployees()
            generateHtml(employeeList);
        }
        else {
            nextEmployee(data, questionsCallback)
            return "nextEmployee Called"
        }
    }
    else {
        const newEmployee = new Employee(data)
        askEmployeeInfo(newEmployee, employeeList, questionsCallback);
        return "askEmployeeInfo Called"
    }
}

// Function to run on initialization - Creates a Manager and begins the loop

function initQuestionLoop(list) {
    console.log(chalk.black.bgGreenBright(" Start by entering the Manager's Information "));
    const manager = new Employee("Manager");
    askEmployeeInfo(manager, list, questionsCallback);
    return "Loop Started"
}

 initQuestion(employeeList, initQuestionLoop)

module.exports = {questionsCallback, initQuestionLoop}