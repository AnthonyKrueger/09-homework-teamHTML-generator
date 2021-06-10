const employee = require("./employee.js")

describe('Employee', () =>{

    const name = "John"
    const role = "Manager"
    const id = 1
    const email = "john@gmail.com"
    const extra = 35
    
    const placeholderEmployee = {
        name: "John",
        role: "Manager",
        id: 1,
        email: "john@gmail.com",
        extra: 35
    }

    describe("Employee Declaration", () => {
        it('should declare an Employee object with the given role property', () => {
            const newEmployee = new employee(role)
            expect(newEmployee.role).toBe(role)
        });
    })

    describe("#populateData", () => {
        it('should populate the Employee object with data properties', () => {
            const newEmployee = new employee(role)
            newEmployee.populateData(name, id, email, extra)
            expect(newEmployee).toEqual(placeholderEmployee)
        });
    })

})