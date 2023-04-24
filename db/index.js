import * as dotenv from 'dotenv' 
import mongo, { connect } from 'mongoose'
dotenv.config()


const dbInit = async() =>{
    connect(process.env.DB_URI,(err)=>{
        if(err)
            console.log("Trouble Connecting to MongoDB!");
    
        console.log("Successfully connected to MongoDB!");
    })
    
}

export default dbInit