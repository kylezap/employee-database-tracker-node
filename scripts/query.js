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
pool.query('SELECT * FROM departments', function (err, {rows}) {
  console.log(rows);
});


















// view all roles


// view all employees


// add a department


// add a role


// add an employee


// update an employee role

