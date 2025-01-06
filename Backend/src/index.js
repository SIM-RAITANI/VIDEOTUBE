import { connectDb } from "./db/index.js";
import { app } from "./app.js";
import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
})

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log("PORT IS LISTENING");
        
    })
})
.catch((err)=>{
    console.log("Connection failed",err);
    
})