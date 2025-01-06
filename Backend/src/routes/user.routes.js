import { Router } from "express";
import { registerUser ,logout,loginUser,changeCurrentPass,getCurrentUser,updateUserAvatar,updateUserCoverImage,updateUserDetails,getWatchHistory,displayUserChannel} from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import {isUserLoggedIn} from "../middlewares/user.middleware.js"
const userRouter=Router()

userRouter.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
           name:"coverImage",
           maxCount:1
        }
    ])
    ,registerUser);

//secured routes
userRouter.route("/logout").post(isUserLoggedIn,logout);
userRouter.route("/login").post(loginUser);
userRouter.route("/change-password").post(isUserLoggedIn,changeCurrentPass);
userRouter.route("/profile").get(isUserLoggedIn,getCurrentUser);
userRouter.route("/change-avatar").patch(isUserLoggedIn,upload.single("avatar"),updateUserAvatar);
userRouter.route("/change-coverImage").patch(isUserLoggedIn,upload.single("coverImage"),updateUserCoverImage);
userRouter.route("/update-user-profile").patch(isUserLoggedIn,updateUserDetails)
userRouter.route("/watchHistory").get(isUserLoggedIn,getWatchHistory);
userRouter.route("/user-channel/:username").get(isUserLoggedIn,displayUserChannel);

export default userRouter;