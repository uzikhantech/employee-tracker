const inquirer = require('inquirer');
const cTable = require('console.table');
const pg = require('pg');
const sqlQuery = require('./lib/sqlQueries')

//database connection properties
const dbConnection = new pg.Client({
    user: 'postgres',
    host: 'psqldatabase',
    database: 'employee_tracker',
    password: 'postgres',
    port: 5432,
});

//make the connection to the database
dbConnection.connect((err) => {
    if (err) throw err;
    console.log("connection successful");
    viewAllEmployees ();
});


//view all employees 
viewAllEmployees = () => {
    dbConnection.query(sqlQuery.viewAllEmployeesQuery(), (err, res) => {
        if (err) throw err;
    
        // Log all results of the SELECT statement
        console.table(res.rows);
        end();
    });
}

//close the connection
end = () => {
    console.log("goodbye");
    dbConnection.end();
    process.exit();
}






