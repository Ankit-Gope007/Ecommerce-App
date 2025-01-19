import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/User.model.js";


export const verifyJWT = asyncHandler(async (req, res, next) => {
    console.log("Incoming cookies:", req.cookies);
    console.log("Incoming headers:", req.headers);

    const token = req.cookies?.accessToken || 
                 req.headers["authorization"]?.replace("Bearer ", "");

    console.log("Extracted token:", token);

    if (!token) {
        throw new ApiError(401, "Unauthorized request");
    }

    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log("Decoded token:", decodedToken);
        
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
        if (!user) {
            throw new ApiError(401, "Invalid Access Token");
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Token verification failed:", error);
        throw new ApiError(401, error?.message || "Invalid access token");
    }
});
