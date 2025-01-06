 import {v2 as cloudinary} from  "cloudinary"
import fs from "fs"
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key:process.env.CLOUDINARY_API_KEY , 
    api_secret:  process.env.CLOUDINARY_API_SECRET
});
console.log(process.env.CLOUDINARY_CLOUD_NAME);


export const uploadFile=async (localFilePath)=>{

    try {

        if (!localFilePath) return null;
        const uploadResult=await cloudinary.uploader.upload(localFilePath,
            {
                resource_type:"auto"
            }
        );
        console.log("File uploaded in :",uploadResult);
        return uploadResult;
        
        
    } catch (error) {

        fs.unlinkSync(localFilePath,(err)=>{
            if (err){
                console.log(err);
                return ;
                
            }
            else{
                console.log("Successful deletion of the file");
                
            }
        });
        
    }

}

export const deleteFile=async(fileUrl)=>{
    try {

        //sample url: https://res.cloudinary.com/your_cloud_name/image/upload/v123456789/sample.jpg
        const urlParts=fileUrl.split("/");
        const publicIdWithExtension=urlParts[urlParts.length-1];   //this will give "sample.jpg"
        const publicId=publicIdWithExtension.split(".")[0];  //this will give "sample"

        const result = await cloudinary.uploader.destroy(publicId);

        
    } catch (error) {
        console.log(error.message);
        
    }
}