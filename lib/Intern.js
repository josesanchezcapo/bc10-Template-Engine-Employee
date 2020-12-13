// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// This class in addition to 'Employee' properties and methods, 'Intern' will also have school.

const Employee = require('./Employee.js');

class Intern extends Employee {

    constructor(name, id, email, school ) {

        super(name, id, email);
        this.school = school;

    }
    getName() {

        return this.name;

    }
    getId() {

        return this.id;

    }
    getEmail() {

        return this.email;

    }
    getSchool() {

        return this.school;

    }
    getRole() {

        return this.Employee;

    }
}

module.exports = Intern;