const express = require('express')
const router = express.Router()
const employeeController = require('../../controllers/employeesController')
const verifyJWT=require('../../middleware/verifyJWT')

router.route('/')
    .get(verifyJWT,employeeController.getAllEmployees)
    .post(employeeController.createNewEmployee)
    .put(employeeController.updateEmployee)
    .delete(employeeController.deleteEmploye)


router.route('/:id')
.   get(employeeController.getEmployee)

module.exports=router;