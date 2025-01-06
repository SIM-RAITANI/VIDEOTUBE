import  mongoose, { Schema } from "mongoose";

const likeSchema=new Schema({
    comment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment"
    },
    tweet:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"tweet"
    },
    video:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"video"
    },
    likedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
},{
    timestamps:true
});

export const likeModel=mongoose.model("like",likeSchema);