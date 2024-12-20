import mongoose from "mongoose";
import { User } from "../models/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


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
        $or :[{email},{phone}]
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
    
})
// login
// logout
// refreshToken
// update profile
    // update user details
    // update password or forget password
// get current user
// get orderdetails



export {
    registerUser,
    getAllRegisteredUser
    
}
