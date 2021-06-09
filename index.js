const questions = require('./assets/questions.js')
const Employee = require("./assets/employee.js")
const List = require("./assets/employeelist")

const employeeList = new List();

function initQuestionLoop() {
    console.log("Start by entering the Manager's Information");
    const manager = new Employee("Manager");
    questions.askEmployeeInfo(manager, employeeList, checkFinalized);
}

function checkFinalized(list) {
    if(list.finalized) {
        const formattedList = employeeList.formatEmployees()
        console.log(formattedList);
    }
    else {
        questions.nextEmployee(list, checkFinalized)
    }
}



initQuestionLoop();