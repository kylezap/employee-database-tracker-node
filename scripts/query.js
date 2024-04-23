//This script will include functions for running SQL queries, exporting them to the main script for usage in Inquirer

//Queries:

//view all departments

// Import and require Pool (node-postgres)
const { Pool } = require('pg');

// Connect to database
const pool = new Pool(
  {
    user: 'postgres',
    password: 'password',
    host: 'localhost',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
)

pool.connect();


// Query database using COUNT() and GROUP BY
const viewDepartments = () => {pool.query('SELECT * FROM departments', function (err, {rows}) {
  console.table(rows);
})
}

const viewRoles = () => {pool.query('SELECT * FROM roles', function (err, {rows}) {
  console.table(rows);
})
}

const viewEmployees = () => {pool.query('SELECT * FROM employees JOIN roles ON roles.id = role_id', function (err, {rows}) {
  console.table(rows);
})
}

const addDepartment = (input) => {pool.query('INSERT INTO departments (department_name) VALUES ($1)',[input], function (err, {rows}) {
  console.table(rows);
})
}

const addRole = (input) => {pool.query('INSERT INTO departments (department_name) VALUES ($1)',[input], function (err, {rows}) {
  console.table(rows);
})
}

const addEmployee = (first, last, role) => {pool.query('INSERT INTO employees (first_name, last_name, role_id) VALUES ($1, $2, $3)',[first, last, role], function (err, {rows}) {
  console.table(rows);
})
}

module.exports = {viewDepartments, viewRoles, viewEmployees, addDepartment, addEmployee};
















// view all roles


// view all employees


// add a department


// add a role


// add an employee


// update an employee role

