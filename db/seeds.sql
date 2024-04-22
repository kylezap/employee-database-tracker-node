INSERT INTO departments (department_name)
VALUES ('Sales'),
       ('IT'),
       ('Human Resources'),
       ('Finance'),
       ('Engineering'),
       ('Operations');

INSERT INTO roles (title, salary, department)
VALUES ('Account Executive', 80000, 1),
       ('Help Desk Analyst', 50000, 2),
       ('Recruiter', 90000, 3),
       ('Analyst', 90000, 4),
       ('Developer', 90000, 5),
       ('Office Manager', 90000, 6),
       ('Director of Finance', 140000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Smith', 1, null),
       ('Homer', 'Simpson', 2, null ), 
       ('Marge', 'Simpson', 3 , null),
       ('Barry', 'Allen', 4, 7),
       ('Harry', 'Potter', 5, null),
       ('Bill', 'Lumberg', 6, null);