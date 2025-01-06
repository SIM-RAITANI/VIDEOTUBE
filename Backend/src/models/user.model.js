import mongoose,{Schema} from "mongoose";
import bcrpt from "bcrypt"

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    avatar:{
        type:String,
        required:true
    },
    coverImage:{
        type:String
    },
    refreshToken:{
        type:String
    },
    watchHistory:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"video"
    }]

},{
    timestamps:true
});
userSchema.pre("save",async function(next){
    if (!this.isModified("password")) return next();
    this.password=await bcrpt.hash(this.password,10);
    next();

});

userSchema.methods.isMatch=async function(password){
    return await bcrpt.compare(password,this.password)
}
userSchema.methods.generateAccessToken= function(){
    return jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullName:this.fullName
    
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
)

}
userSchema.methods.generateRefreshToken= function(){
    return jwt.sign({
        _id:this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)

}

export const userModel=mongoose.model("user",userSchema);