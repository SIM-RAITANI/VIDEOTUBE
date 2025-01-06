import {ApiError} from "../utils/ApiError"
import { userModel } from "../models/user.model";
import { asyncHandler } from "../utils/asyncHandler";

export const isUserLoggedIn=asyncHandler(async (req,res,next)=>{
    try {
        const accessToken=req.cookies?.accessToken || req.header("Authorisation")?.replace("Bearer ","");
        if (!accessToken){
             throw new ApiError(400,"User not logged-in");
        }
    
        const isTokenValid=await jwt.sign(accessToken,process.env.ACCESS_TOKEN_SECRET);
        if (!isTokenValid){
            throw new ApiError(400,"Wrong token")
        }

        const user=await userModel.findById(req.cookies.accessToken._id).select("-password -refreshToken");
        req.user=user;

        next();
    } catch (error) {
        throw new ApiError(400,"Something went wrong");
    }
})
    
