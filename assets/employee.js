 function Employee(role) {
     this.role = role;
 }

Employee.prototype.populateData = function (name, id, email, extra) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.extra = extra;
}

module.exports = Employee;