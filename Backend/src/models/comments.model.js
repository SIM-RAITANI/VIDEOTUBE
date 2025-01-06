import mongoose,{ Schema } from "mongoose";

const commentSchema=new Schema({
    comment:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    video:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"video"
    }

},{
    timestamps:true
});

export const commentModel=mongoose.model("comment",commentSchema);