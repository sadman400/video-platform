import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!uploadOnCloudinary) return null

        // upload the file 
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        // console.log("file is uploaded on cloudinary", response.url);
        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // it will remove the temporary file if the upload operation got failed
        return null;
    }
}

export {uploadOnCloudinary}