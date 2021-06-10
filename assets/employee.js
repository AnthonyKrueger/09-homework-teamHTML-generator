// Employees are instantiated with only a role property

function Employee(role) {
     this.role = role;
 }

// Function to add necessary properties to the instance

Employee.prototype.populateData = function (name, id, email, extra) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.extra = extra;
}

module.exports = Employee;