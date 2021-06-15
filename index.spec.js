const index = require("./index.js")
const Employee = require("./assets/employee.js")
const List = require("./assets/employeelist.js")
let generateHTML = require("./assets/generateHTML.js")
const placeholderEmployee1 = new Employee("Manager")
placeholderEmployee1.populateData("John", 1, "john@gmail.com", 35)

jest.mock("./assets/questions.js")
jest.mock("./assets/generateHTML.js")

describe('#questionsCallback', () => {

    it('should take a finalized list and format it', () => {
        generateHTML = jest.fn();
        const employeeList = new List();
        employeeList.employees.push(placeholderEmployee1)
        employeeList.finalized = true;
        employeeList.formatEmployees()
        expect(employeeList.employees[0].name).toBe("Name: John")
    });

    it('should take an unfinalized list and run nextEmployee with it', () => {
        const employeeList = new List();
        employeeList.finalized = false;
        employeeList.employees.push(placeholderEmployee1)
        expect(index.questionsCallback(employeeList)).toBe("nextEmployee Called");
    });

    it('should take an Employee object and run askEmployeeInfo with it', () => {
        const placeHolderEmployee2 = new Employee("Manager");
        expect(index.questionsCallback(placeHolderEmployee2)).toBe("askEmployeeInfo Called");
    });

});

describe('#initQuestionLoop', () => {

    it('should create a new employee and run askEmployeeQuestions on it', () => {
        expect(index.initQuestionLoop()).toBe("Loop Started")
    });
});