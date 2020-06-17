DROP SCHEMA IF EXISTS employee_trackerDB;

CREATE SCHEMA employee_trackerDB;

SET search_path TO employee_trackerDB;

CREATE TABLE department (
  id  SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id  SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary NUMERIC (8,2),
    department_id INT REFERENCES department (id)
);

CREATE TABLE employee (
  id  SERIAL PRIMARY KEY,
  first_nanme VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT REFERENCES role (id),
  manager_id INT REFERENCES employee (id)
);
