// Import requirements

const questions = require('./assets/questions.js')
const Employee = require("./assets/employee.js")
const List = require("./assets/employeelist")
const chalk = require("chalk")

// Create object for list of employees

const employeeList = new List();

// Function to check responses from nextEmployee and askEmployeeInfo and route the program accordingly
// When an unfinalized List instance is passed, nextEmployee is ran
// When a finalized List instance is passed, the List is formatted and formatHTML is ran
// When a role type is passed, a new employee is created with that role and askEmployeeInformation is ran

function questionsCallback(data) {
    if(data instanceof List) {
        if(data.finalized) {
            const formattedList = employeeList.formatEmployees()
            console.log(formattedList);
        }
        else {
            questions.nextEmployee(data, questionsCallback)
        }
    }
    else {
        const newEmployee = new Employee(data)
        questions.askEmployeeInfo(newEmployee, employeeList, questionsCallback);
    }
}

// Function to run on initialization - Creates a Manager and begins the loop

function initQuestionLoop() {
    console.log(chalk.black.bgWhite(" Start by entering the Manager's Information "));
    const manager = new Employee("Manager");
    questions.askEmployeeInfo(manager, employeeList, questionsCallback);
}



initQuestionLoop();