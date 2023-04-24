import express from "express";
import dbInit from "./db/index.js";
import middleWare from "./middleware/index.js";
import router from "./routes/index.js";
import https from 'http'
const port = 3000
const app = express()
app.use(express.json())
dbInit()
app.use(middleWare)
app.use('/',router)
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
// express().mi

export default app
