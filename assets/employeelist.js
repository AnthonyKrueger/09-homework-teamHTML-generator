function EmployeeList() {
    this.employees = [];
    this.finalized = false;
}

EmployeeList.prototype.formatEmployees = function() {
    const formattedEmployees = []
    this.employees.forEach((employee) => {
        if(employee.role === "Manager") {
            employee.extra = `Office Number: ${employee.extra}`
        }
        else if(employee.role === "Intern") {
            employee.extra = `School: ${employee.extra}`
        }
        employee.name = `Name: ${employee.name}`
        employee.id = `ID: ${employee.id}`
        employee.email = `Email: ${employee.email}`
        formattedEmployees.push(employee)
    })
    return formattedEmployees;
}

module.exports = EmployeeList;