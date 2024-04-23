//This script functions as the inquirer program. When run, the user will be prompted to choose the following:
// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.


//Imports
const {viewDepartments, viewRoles, viewEmployees, addDepartment, addEmployee} = require('./query')
const inquirer = require('inquirer');



const directionsPrompt = {
  type: 'list',
  name: 'direction',
  message: 'What would you like to do?',
  choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee'],
};

const addDepartmentPrompt = {
  type: 'input',
  name: 'department',
  message: 'What is the name of the department you would like to add?',
}

const addRolePrompt = {
  type: 'input',
  name: 'role',
  message: 'What is the name of the role you would like to add?',
}

const addEmployeePrompt = [{
  type: 'input',
  name: 'first',
  message: 'What is the first name of the employee you would like to add?'
},
{ type: 'input',
name: 'last',
message: 'What is their last name?'
},
{
  type: 'list',
  name: 'role',
  message: 'What is their role?',
  choices: 
}
]

function main() {
  console.log('Welcome to Employee Tracker.');
  chooseAction();
}

function chooseAction() {
  inquirer.prompt(directionsPrompt).then((answers) => {
    if (answers.direction === 'view all departments') {
      viewDepartments();
      chooseAction();
    } else if (answers.direction === 'view all roles') {
      viewRoles();
      chooseAction();
    } else if (answers.direction === 'view all employees') {
      viewEmployees();
      chooseAction();
    } else if (answers.direction === 'add a department') {
      inquirer.prompt(addDepartmentPrompt).then((answer) => {
        addDepartment(answer.department);
        console.log('Success!');
       })
    } else if (answers.direction === 'add a role') {
      inquirer.prompt(addRolePrompt).then((answer) => {
        addRole(answer.role);
        console.log('Success!');
       })
    } else if (answers.direction === 'add an employee') {
      inquirer.prompt(addEmployeePrompt).then((answer) => {
        addEmployee(answer.first, answer.last, answer.role);
        console.log('Success!');
       })
    }
    
    else {
      console.log('Still working on this feature.');
      chooseAction();
    }
  });
}

main();