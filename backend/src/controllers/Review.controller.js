import mongoose from "mongoose";
import { User } from "../models/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { Product } from "../models/Product.model.js";
import { Review } from "../models/Review.model.js";


// add review
const addReview = asyncHandler(async (req, res) => {
    // get product id, rating and comment from frontend
    const {product} = req.params;
    const {rating, comment } = req.body;

    // check if product exists
    const productExists = await Product.findById(Product);
    if (!productExists) {
        throw new ApiError(404, "Product not found");
    }

    const review = await Review.create({
        product: product,
        user: req.user._id,
        rating,
        comment
    });
    
    return res.status(201).json(new ApiResponse(201, "Review added successfully", review));


});
// remove review
const removeReview = asyncHandler(async (req, res) => {}  );
// get reviews
const getReviews = asyncHandler(async (req, res) => {}  );
// get reviews by product
const getReviewsByProduct = asyncHandler(async (req, res) => {}  );



export  {
    addReview,
    removeReview,
    getReviews,
    getReviewsByProduct
}