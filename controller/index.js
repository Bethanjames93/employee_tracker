const connection = require("../db/connection.js/index.js.js");
var inquirer = require("inquirer");

connection.connect(function(err) {
    if (err) throw err;
    searchEmployee();
});

function searchEmployee() {
    inquirer
    .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Find employee",
            "Find roles",
            "Find department",
            "Add new employee",
            "Add new role",
            "Add new department",
            "Update employee",
            "exit"
        ]
    })

    .then(function(answer) {
        switch (answer.action) {
            case "Find employee":
            employeeSearch();
            break;

            case "Find roles":
            roleSearch();
            break;

            case "Find department":
            departmentSearch();
            break;

            case "Add new employee":
            createEmployee();
            break;

            case "Add new role":
            createRole();
            break;

            case "Add new department":
            createDepartment();
            break;

            case "Update employee":
            updateEmployee();
            break;
        }
    });
}

function employeeSearch() {
    inquirer
    .prompt({
        name: "employee",
        type: "input",
        message: "Who would you like to search for?"
    })
    .then(function(answer) {
        var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name";
        connection.query(query, { employee: answer.employee }, function(err, res) {
            if (err) throw err;
            console.log(res.employee);
            searchEmployee();
        });
    });
}

function roleSearch() {
    inquirer
    .prompt({
        name: "role",
        type: "input",
        message: "What role would you like to search for?"
    })
    .then(function(answer) {
        var query = "SELECT role.id, role.title, department.name";
        connection.query(query, { role: answer.role }, function(err, res) {
            if (err) throw err;
            console.log(res.role);
            searchEmployee();
        });
    });
}

function departmentSearch() {
    inquirer
    .prompt({
        name: "department",
        type: "input",
        message: "What department would you like to search for?"
    })
    .then(function(answer) {
        var query = "SELECT department.id, department.name";
        connection.query(query, { department: answer.department }, function(err, res) {
            if (err) throw err;
            console.log(res.department);
            searchEmployee();
        });
    });
}

function createEmployee() {
    inquirer
    .prompt({
        name: "employee",
        type: "input",
        message: "Create employee you would like to add to the business"
    })
    .then(function(answer) {
        var query = "INSERT INTO employee SET ?";
        connection.query(query, {employee: answer.employee }, function(err, res) {
            if (err) throw err;
            console.log(res.employee);
            searchEmployee();
        });
    });
}

function createRole() {
    inquirer
    .prompt({
        name: "role",
        type: "input",
        message: "Create role you would like to add to the business"
    })
    .then(function(answer) {
        var query = "INSERT INTO role SET ?";
        connection.query(query, {role: answer.role }, function(err, res) {
            if (err) throw err;
            console.log(res.role);
            searchEmployee();
        });
    });
}

function createDepartment() {
    inquirer
    .prompt({
        name: "department",
        type: "input",
        message: "Create a department you would like to add to the business"
    })
    .then(function(answer) {
        var query = "INSERT INTO department SET ?";
        connection.query(query, {department: answer.department }, function(err, res) {
            if (err) throw err;
            console.log(res.department);
            searchEmployee();
        });
    });
}

function updateEmployee() {
    inquirer
    .prompt({
        name: "employee",
        type: "input",
        message: "Update employee information"
    })
    .then(function(answer) {
        var query = "UPDATE employee SET role = WHERE id = ?";
        connection.query(query, {employee: answer.employee }, function(err, res) {
            if (err) throw err;
            console.log(res.employee);
            searchEmployee();
        });
    });
}


module.exports = new DB(connection);