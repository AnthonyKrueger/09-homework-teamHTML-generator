const List = require("./employeelist.js")

describe('EmployeeList', () => {

    describe("List declaration", () => {
        it('should create an EmployeeList object with a finalized property of false', () => {
            const employeeList = new List()
            expect(employeeList.finalized).toBe(false);
            expect(employeeList.employees).toStrictEqual([]);
        });
    })

    describe("#formatEmployees", () => {
        it('should return an array of Employee objects with formatted string properties based on their role', () => {
            const employeeList = new List()
            const placeholderEmployee1 = {
                name: "John",
                role: "Manager",
                id: 1,
                email: "john@gmail.com",
                extra: 35
            }
            const placeholderEmployee2 = {
                name: "Steve",
                role: "Engineer",
                id: 2,
                email: "steve@gmail.com",
                extra: "steve.github.com"
            }
            const placeholderEmployee3 = {
                name: "Matt",
                role: "Intern",
                id: 3,
                email: "Matt@gmail.com",
                extra: "Northwestern"
            }
            employeeList.employees.push(placeholderEmployee1, placeholderEmployee2, placeholderEmployee3);
            employeeList.formatEmployees()
            expect(employeeList.employees[0].extra).toBe("Office Number: 35");
            expect(employeeList.employees[1].extra).toBe("steve.github.com");
            expect(employeeList.employees[2].extra).toBe("School: Northwestern");
        });
    })
})