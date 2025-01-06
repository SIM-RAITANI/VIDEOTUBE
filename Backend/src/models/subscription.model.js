import mongoose,{Schema} from "mongoose"

const subscriptionSchema=new Schema({
    //who is subscribing to you
    subscriber:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    //one to whom youy are subscribing
    channel :{
        type:Schema.Types.ObjectId,
        ref:"user"
    }
},
    {
        timestamps:true
    
    }

);

export const subscriberModel=mongoose.model("subscription",subscriptionSchema);