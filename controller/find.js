import EMPLOYEE from "../db/models/employee.js";


export async function find(req,res){
    const found = await EMPLOYEE.findOne({_id: req.params.id})
    console.log(found);
    res.send(found)
}