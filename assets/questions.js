
const inquirer = require('inquirer')
const Employee = require("./employee.js")

function askEmployeeInfo(employee, list, callback) {
    const questions = [
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the employee's ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the employee's Email Adress?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the employee's office number?",
            name: "extra",
        }
    ]
    if(employee.role === "Intern") {
        questions[3].message = "What school did this intern go to?"
    }
    else if(employee.role === "Engineer") {
        questions[3].message = "Enter a link to the employee's GitHub account."
    }
    inquirer.prompt(questions).then((response) => {
        const {name, id, email, extra} = response;
        employee.populateData(name, id, email, extra);
        list.employees.push(employee);
        callback(list)
    })

}

function nextEmployee(list, callback) {
    inquirer.prompt(
        {
            type: "list",
            message: "Add another employee?",
            choices: ["Engineer", "Intern", "Done Adding Employees"],
            name: "type"
        }).then((response) => {
            if(response.type === "Done Adding Employees") {
                list.finalized = true;
                callback(list);
            }
            else {
                const employee = new Employee(response.type)
                askEmployeeInfo(employee, list, callback);
            }
        })
}


module.exports = { askEmployeeInfo, nextEmployee }