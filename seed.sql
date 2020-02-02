use employee_trackerDB;

INSERT INTO department
    (name)
VALUES
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Software Apprentice', 17000, 1),
    ('Software Engineer', 28000, 1),
    ('Lead Engineer', 35000, 1),
    ('Accountant', 30000, 2),
    ('HR Manager', 30000, 3);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Bethan', 'James', 1, 3),
    ('Tara', 'Snowden', 2, 3),
    ('Daniel', 'Jackson', 3, NULL),
    ('Joe', 'White', 4, NULL),
    ('Charlotte', 'Burke', 5, NULL);