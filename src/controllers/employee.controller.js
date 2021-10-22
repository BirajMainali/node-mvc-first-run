const _employee = require('../models/Employee')
module.exports = {

    Get: async (req, res) => {
        try {
            const employee = await _employee.FindById(req.params.id);
            if (!employee) return res.status(404);
            res.send(employee);
        } catch (e) {
            res.send({ error: e.message });
        }
    },

    GetAll: async (req, res) => {
        const employees = await _employee.GetAll();
        res.send(employees);
    },

    Create: async (req, res) => {
        try {
            const validateEmployee = new _employee(req.body.first_name);
            validateEmployee.validateUserInput();
            const employeeId = await _employee.create(req.body);
            const Created = await _employee.FindById(employeeId);
            res.status(201).json({
                message: `Employee ${Created.first_name} Added !`,
                result: Created
            });
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    Update: async (req, res) => {
        try {
            const validateEmployee = new _employee(req.body.first_name);
            validateEmployee.validateUserInput();
            if (validateEmployee.error) {
                throw validateEmployee.error.toString();
            }
            const employeeId = await _employee.update(req.params.id, req.body);
            const updated = await _employee.FindById(employeeId);
            res.status(201).json({
                message: `Employee ${employee.first_name} updated !`,
                result: updated
            })
        } catch (e) {
            res.json({ error: e.message })
        }
    },
    Remove: async (req, res) => {
        try {
            const employee = _employee.FindById(req.params.id);
            if (!employee) return res.status(404);
            await _employee.remove(employee.id);
            res.status(204).json({ message: "removed" })
        } catch (e) {
            res.json({ error: e.message });
        }
    }

}