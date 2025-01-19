import mongoose from "mongoose";
import { User } from "../models/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";


const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        user.refreshToken=refreshToken
        await user.save({validateBeforeSave:false})
        return {accessToken,refreshToken}
    } catch (error) {
        throw new ApiError(500, "Something went wrong while genrating access and refresh token")
    }
}

const registerUser = asyncHandler (async(req,res) => {
    const {name , email ,password , phone , role , address } = req.body

    if (!name||!email||!password||!phone||!role||!address){
        throw new ApiError(401 , "All feilds are required")
    }

    const existing = await User.findOne({
        $or: [
            {email:email},
            {phone:phone}
        ]
    })

    if (existing) {
        throw new ApiError(401 , "User already exists with same email or phone number")
    }

    const user  = await User.create({
        name,
        email,
        password,
        phone,
        role,
        address
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    if (!createdUser){
        throw new ApiError(401,"The User was not registered ####")
    }

    // const {accessToken,refreshToken} = await generateAccessAndRefreshToken(user._id)

    // const options = {
    //     httpOnly:true,
    //     secure:true,
    // }

    return res
    .status(200)
    .json(
        new ApiResponse(200 , createdUser , "User was created Successfully ")
    )


})

const getAllRegisteredUser = asyncHandler(async (req,res) => {
    const user = await User.find({}).select("-password -refreshToken")

    
    return res
    .status(200)
    .json(
        new ApiResponse(200 , user , "All registered user fetched successfully")
    )
})

// get all by role
const getByRole = asyncHandler(async (req,res) => {
    const {role} = req.body
    const user = await User.find({role}).select("-password -refreshToken")

    return res
    .status(200)
    .json(
        new ApiResponse(200 , user , "All registered user fetched successfully")
    )
    
})
// login
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    if (!password || !email) {
        throw new ApiError(400, "Password and Email required");
    }
    
    const user = await User.findOne({ email });
    if (!user) {
        throw new ApiError(404, "No User found with this email");
    }
    
    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid User credentials");
    }
    
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);
    
    const loggedInUser = await User.findById(user._id)
        .select("-password -refreshToken");

    // Modified cookie options for Render
    const options = {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        path: '/'  // Add this
    };

    // Add debugging logs
    console.log("Setting cookies with options:", options);
    console.log("Access Token:", accessToken);
    
    try {
        res.cookie("accessToken", accessToken, options);
        res.cookie("refreshToken", refreshToken, options);
        
        console.log("Cookies set. Response headers:", res.getHeaders());
        
        return res.status(200).json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser,
                    accessToken,
                    refreshToken
                },
                "User logged in successfully"
            )
        );
    } catch (error) {
        console.error("Error setting cookies:", error);
        throw error;
    }
});

// logout
const logoutUser = asyncHandler(async(req,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken:undefined
            }
        },
        {
            new:true
        }
    )
    const options = {
        httpOnly:true,
        secure:true,
          sameSite: 'none',  // Critical for cross-site requests
  domain: '.onrender.com',  // Try this if the above doesn't work
    }

    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(new ApiResponse(200 , {} , "User Logged Out"))
})

 // update profile
  // update user details
const updateProfile = asyncHandler(async(req,res)=>{
    const {name,email,phone,address} = req.body
    const user = await User.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
                name,
                email,
                phone,
                address
            }
        },
        {
            new:true
        }
    )
    if (!user) {
        throw new ApiError(404 , "User not found")
    }
    return res
    .status(200)
    .json(
        new ApiResponse(200 , user , "User updated successfully")
    )
});
// update password or forget password
const updatePassword = asyncHandler(async(req,res)=>{
    const {oldPassword,newPassword} = req.body
    const user = await User.findById(req.user._id)
    const isPasswordValid = await user.isPasswordCorrect(oldPassword)
    if (!isPasswordValid) {
        throw new ApiError(401 , "Invalid Password")
    }
    user.password = newPassword
    await user.save()
    return res
    .status(200)
    .json(
        new ApiResponse(200 , {} , "Password updated successfully")
    )

})
// get current user

const getCurrentUser = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user._id).select("-password -refreshToken")
    return res
    .status(200)
    .json(
        new ApiResponse(200 , user , "User fetched successfully")
    )

})

// get orderdetails
const getOrderDetails = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user._id).populate("orders")
    return res
    .status(200)
    .json(
        new ApiResponse(200 , user.orders , "Orders fetched successfully")
    )
})



export {
    registerUser,
    getAllRegisteredUser,
    getByRole,
    loginUser,
    logoutUser,
    updateProfile,
    updatePassword,
    getCurrentUser,
    getOrderDetails
    
    
}
