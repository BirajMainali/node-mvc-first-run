const knex = require('../application/database/knex');
const employee = function (data) {
    this.data = data;
    this.error = []
}

employee.prototype.validateUserInput = function () {
    if (this.data === "") {
        this.error.push("Please Enter the employee name");
    }
};

employee.GetAll = function () {
    return knex("employees").select("*")
}

employee.FindById = function (id) {
    return knex("employees").select("*").where("id", id);
}

employee.create = function (employee) {
    return knex("employees").insert(employee)
}

employee.update = function (id, employee) {
    return knex("employees").where("id", id).update(employee)
}

employee.remove = function (id) {
    return knex("employees").where("id", id).del();
}
module.exports = employee;