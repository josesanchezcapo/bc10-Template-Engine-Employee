const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// This Object will hold User Input
let employeeProfile = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { type } = require("os");
const { choices } = require("yargs");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// Employee Profile Questions

const employeeProfileQuestions = function () {
    inquirer.prompt([
        {

            type: 'input',
            name: 'name',
            message: 'Enter your name'

        },
        {

            type: 'input',
            name: 'id',
            message: 'Enter Team Member Id number'


        },
        {

            type: 'input',
            name: 'email',
            message: 'Enter Team Member email address'

        },
        {

            type: 'list',
            name: 'profile',
            message: 'Select the role for the Team Member Profile to be created',
            choices: ['Engineer', 'Intern', 'Manager']

        }
    ]).then(mainResponses => {
        // HINT: each employee type (manager, engineer, or intern) has slightly different
        // information; write your code to ask different questions via inquirer depending on
        // employee type.
        // Profile Specifics

        switch (mainResponses.profile) {
            case 'Engineer':
                return inquirer.prompt([
                    {

                        type: 'input',
                        name: 'github',
                        message: 'Enter Github Username',

                    },
                ]).then(responses => {

                    // Testing purposes
                    //console.log(mainResponses.name, mainResponses.id, mainResponses.email, mainResponses.profile, responses.github);
                    let engineer = new Engineer(mainResponses.name, mainResponses.id, mainResponses.email, mainResponses.profile, responses.github);
                    employeeProfile.push(engineer);

                })

                break;

            case 'Intern':
                return inquirer.prompt([
                    {

                        type: 'input',
                        name: 'school',
                        message: "For 'Intern's' Enter School Name"

                    }
                ]).then(responses => {

                    // Testing purposes
                    //console.log(mainResponses.name, mainResponses.id, mainResponses.email, mainResponses.profile, responses.school);
                    let intern = new Intern(mainResponses.name, mainResponses.id, mainResponses.email, mainResponses.profile, responses.school);
                    employeeProfile.push(intern);

                })
                break;
            case 'Manager':
                return inquirer.prompt([
                    {

                        type: 'input',
                        name: 'officeNumber',
                        message: 'Enter Office Phone Number'

                    }
                ]).then(responses => {

                    // Testing purposes
                    //console.log(mainResponses.name, mainResponses.id, mainResponses.email, mainResponses.profile, responses.officeNumber);
                    let manager = new Manager(mainResponses.name, mainResponses.id, mainResponses.email, mainResponses.profile, responses.officeNumber);
                    employeeProfile.push(manager);

                })
                break;
            // Giving the user the option to enter another profile.
        }
    }).then(responses => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'anotherProfile',
                message: 'Enter another Profile?',
                choices: ['Yes', 'No']
            }
        ]).then(response => {

            if (response.anotherProfile === 'Yes') { employeeProfileQuestions();} else { }
            
        })
    })
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

employeeProfileQuestions();


// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
