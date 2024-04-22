//This script functions as the inquirer program. When run, the user will be prompted to choose the following:
// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.


//Imports

const inquirer = require('inquirer');



const directionsPrompt = {
  type: 'list',
  name: 'direction',
  message: 'What would you like to do?',
  choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee'],
};

function main() {
  console.log('Welcome to Employee Tracker.');
  chooseAction();
}

function chooseAction() {
  inquirer.prompt(directionsPrompt).then((answers) => {
    if (answers.direction === 'view all departments') {
      console.log('You find yourself in a forest');
      console.log(
        'There is a wolf in front of you; a friendly looking dwarf to the right and an impasse to the left.',
      );
      encounter1();
    } else {
      console.log('Still working on this feature.');
      chooseAction();
    }
  });
}

function encounter1() {
  inquirer.prompt(directionsPrompt).then((answers) => {
    const { direction } = answers;
    if (direction === 'Forward') {
      console.log('You attempt to fight the wolf');
      console.log(
        'Theres a stick and some stones lying around you could use as a weapon',
      );
      encounter2b();
    } else if (direction === 'Right') {
      console.log('You befriend the dwarf');
      console.log('He helps you kill the wolf. You can now move forward');
      encounter2a();
    } else {
      console.log('You cannot go that way');
      encounter1();
    }
  });
}

function encounter2a() {
  inquirer.prompt(directionsPrompt).then((answers) => {
    const { direction } = answers;
    if (direction === 'Forward') {
      let output = 'You find a painted wooden sign that says:';
      output += ' \n';
      output += ' ____  _____  ____  _____ \n';
      output += '(_  _)(  _  )(  _ \\(  _  ) \n';
      output += '  )(   )(_)(  )(_) ))(_)(  \n';
      output += ' (__) (_____)(____/(_____) \n';
      console.log(output);
    } else {
      console.log('You cannot go that way');
      encounter2a();
    }
  });
}



main();