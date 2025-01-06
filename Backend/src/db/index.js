import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";



export const connectDb=async()=>{
    try {

        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("connecting")
        
    } catch (error) {
        console.log("Connection failed");
    }
}