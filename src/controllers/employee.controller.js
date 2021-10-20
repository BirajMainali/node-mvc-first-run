const _employee = require('../models/Employee')
module.exports = {

    get: async (req, res) => {
        const employee = await _employee.getAsync(req.params.id);
        res.send(employee);
    },

    getAll: async (req, res) => {
        const employees = await _employee.getAllAsync();
        res.send(employees);
    },

    New: async (req, res) => {
        try {
            const validateEmployee = new _employee(req.body.first_name);
            validateEmployee.validateUserInput();
            const employee = await _employee.createAsync(req.body);
            res.status(201).json({employee});
        } catch (e) {
            res.json({error: e.message});
        }
    },
    Update: async (req, res) => {
        try {
            const validateEmployee = new _employee(req.body.first_name);
            validateEmployee.validateUserInput();
            const employee = await _employee.updateAsync(req.params.id, req.body);
            res.status(201).json({employee})
        } catch (e) {
            res.json({error: e.message})
        }
    },
    Remove: async (req, res) => {
        try {
            const employeeId = req.params.id;
            await _employee.removeAsync(employeeId);
            res.status(204).json({message: "removed"})
        } catch (e) {
            res.json({error: e.message});
        }
    }

}