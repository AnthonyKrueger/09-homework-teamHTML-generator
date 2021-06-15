function EmployeeList() {
    this.employees = [];
    this.finalized = false;
}

EmployeeList.prototype.formatEmployees = function() {
    this.employees.forEach((employee) => {
        if(employee.role === "Manager") {
            employee.extra = `Office Number: ${employee.extra}`
        }
        else if(employee.role === "Intern") {
            employee.extra = `School: ${employee.extra}`
        }
        else if(employee.role === "Employee") {
            employee.extra = `Main Duty: ${employee.extra}`
        }
        employee.name = `Name: ${employee.name}`
        employee.id = `ID: ${employee.id}`
    })
}

module.exports = EmployeeList;