import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema=new Schema({
    videoFile:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    }
    ,
    thumbnail:{
        type:String,

    },
    duration:{
        type:Number
    },
    views:{
        type:Number
    },
    isPublished:{
        type:Boolean
    }
},{
    timestamps:true
});

videoSchema.plugin(mongooseAggregatePaginate);

export const videoModel=mongoose.model("video",videoSchema);