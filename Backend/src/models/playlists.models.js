import mongoose,{ Schema } from "mongoose";

const playlistSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    video:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"video"
        }
    ]
},{
    timestamps:true
})