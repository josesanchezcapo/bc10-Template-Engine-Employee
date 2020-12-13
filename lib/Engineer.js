// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// This class in addition to 'Employee' properties and methods, 'Engineer' will also have github username.

const Employee = require('./Employee.js');

class Engineer extends Employee {

    constructor(name, id, email, github) {

        super(name, id, email);
        this.github = github;

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
    getGithub() {

        return this.github;

    }
    getRole() {

        return this.Employee;

    }
}

module.exports = Engineer;