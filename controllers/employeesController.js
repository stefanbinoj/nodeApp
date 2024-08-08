const data ={}
data.employees=require('../../data/employees.json');

const getAllEmployees = (req,res)=>{
    res.json(data.employees )
}

const createNewEmployee=(req,res)=>{
    res.json({
        "firstname":req.body.firstname,
        "lastname" : req.body.lastname
    }
    )
}

const updateEmployee = (req,res)=>{
    res.json({
        "firstname":req.body.firstname
    }
    )
}
const deleteEmploye = (req,res)=>{
    res.json({"id":req.body.id
    }
    )
}

const getEmployee = (req,res)=>{
    res.json({"id":req.params.id})
}

module.exports={
    getAllEmployees,
    updateEmployee,
    deleteEmploye,
    createNewEmployee,
    getEmployee
}