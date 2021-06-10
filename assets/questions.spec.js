const inquirer = require('inquirer')
const Employee = require("./employee.js")
const questions = require("./questions.js")

jest.mock("inquirer");

describe('#askEmployeeInfo', () => {
    const placeholderEmployee1 = new Employee("Manager")
    const placeholderEmployee2 = new Employee("Manager")
    placeholderEmployee2.populateData("John", 1, "john@gmail.com", 35)
    const placeholderList = {employees:[], finalized:false}

    it('should take data entered, populate employee data to a list, and run a callback', () => {
        inquirer.prompt = jest.fn().mockResolvedValue(placeholderEmployee2)
        questions.askEmployeeInfo(placeholderEmployee1, placeholderList, testCB);
        function testCB(data) {
            expect(placeholderList.employees[0]).toBeDefined()
        }
    });
});

describe('#nextEmployee', () => {

    it('should take a role option and return it to a callback function', () => {
        inquirer.prompt = jest.fn().mockResolvedValue({type: "Engineer"})
        const placeholderList = {employees:[], finalized:false}
        questions.nextEmployee(placeholderList, testCB)
        function testCB(data) {
            expect(data).toBe("Engineer");
        }
    });

    it('should return the list of employees when "Done Adding Employees" is chosen', () => {
        inquirer.prompt = jest.fn().mockResolvedValue({type: "Done Adding Employees"})
        const placeholderList = {employees:[{
            name: "John",
            role: "Manager",
            id: 1,
            email: "john@gmail.com",
            extra: 35
        }], finalized:false}
        questions.nextEmployee(placeholderList, testCB)
        function testCB(data) {
            expect(data).toBe(placeholderList);
        }
    });
});