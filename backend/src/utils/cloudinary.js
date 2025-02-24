// import { v2 as cloudinary } from "cloudinary"
// import fs from "fs"



// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const uploadOnCloudinary = async (localFilePath)=>
//     {
//         try {
//             if(!localFilePath) return null;
//             const response = await cloudinary.uploader.upload(localFilePath,{
//                 resource_type:"auto"
//             })
//             // file has been uploaded successfully
//             // console.log('file is uploaded on cloudinary',response.url);
//             fs.unlinkSync(localFilePath)
//             return response
//         } catch (error) {
//             fs.unlinkSync(localFilePath) /*removes the locally saved temporary file
//             as the upload operation got failed*/
//             return null;
//         }
//     }

// export {uploadOnCloudinary};

// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const uploadOnCloudinary = async (buffer) => {
//     try {
//         if (!buffer) return null;
        
//         const response = await cloudinary.uploader.upload_stream({
//             resource_type: "auto"
//         }, (error, result) => {
//             if (error) return null;
//             return result;
//         }).end(buffer);
        
//         return response;
//     } catch (error) {
//         return null;
//     }
// }

// export { uploadOnCloudinary };



import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (buffer, originalname) => {
    try {
        if (!buffer) return null;
        
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { 
                    resource_type: "auto",
                    filename: originalname
                },
                (error, result) => {
                    if (error) {
                        console.error('Cloudinary upload error:', error);
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
            
            uploadStream.end(buffer);
        });
    } catch (error) {
        console.error('Upload process error', error);
        return null;
    }
}

export { uploadOnCloudinary };

