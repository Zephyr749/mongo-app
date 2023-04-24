import EMPLOYEE from "../db/models/employee.js";


export async function aggregate(req,res){
    console.log(req.params);
    const agg = await EMPLOYEE.aggregate([{$match:{designation: req.params.des}},{$sort:{salary:1}}])
    res.send(agg)
    EMPLOYEE.remove({},)
}