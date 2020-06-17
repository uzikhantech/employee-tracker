const Query = require("./Query");

viewAllEmployeesQuery = () => {
    let select = 'SELECT e1.id, e1.first_name, e1.last_name, r.title, d.name as department, r.salary, e2.first_name as manager ';
    let from = 'FROM employee e1, employee e2, role r, department d ';
    let where = 'where e1.id = r.id AND d.id = r.department_id AND e1.id = e2.id;';
    const sqlQuery = new Query(select,from,where); 
    return sqlQuery.getFullQuery();
}

module.exports = {
    viewAllEmployeesQuery
}