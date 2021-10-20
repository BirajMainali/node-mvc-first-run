const express = require("express")
const router = express.Router();

const employeeController = require("./controllers/employee.controller")


router.get("/api/employees", employeeController.getAll);
router.get("/api/employees/get/:id", employeeController.get);
router.post("/api/employees/new", employeeController.New);
router.patch("/api/employees/update/:id", employeeController.Update);
router.delete("/api/employees/remove/:id", employeeController.Remove);

module.exports = router;