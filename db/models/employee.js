
import mongo from "mongoose";

const empSchema = new mongo.Schema({
    name:{
        type: String,
        required: true,
    },
    designation:{
        type: String,
        default: 'Junior'
    },
    salary:{
        type: Number,
        required: true,
    },
    createdAt:{
        type: Number,
        required: true,
        default: Date.now()
    },    
    nickName:{
        type: String,
        required: true,
    },
})

const EMPLOYEE = mongo.model('employee',empSchema)

export default EMPLOYEE