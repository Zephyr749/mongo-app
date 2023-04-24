import EMPLOYEE from "../db/models/employee.js";


export async function insert(req,res){
    const newEmp = new EMPLOYEE({
        name: req.body.name,
        salary: req.body.salary,
        designation: req.body.designation
    });
    newEmp.save()
    res.send(newEmp)
}