import mongoose from "mongoose";
import { User } from "../models/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { Product } from "../models/Product.model.js";
import { Review } from "../models/review.model.js";


// add review
const addReview = asyncHandler(async (req, res) => {
    // get product id, rating and comment from frontend
    const {product} = req.params;
    const {rating, comment } = req.body;

    // check if product exists
    const productExists = await Product.findById(product);
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
const removeReview = asyncHandler(async (req, res) => {
    // get product id from frontend
    const {product} = req.params;

    // check if product exists
    const productExists = await Product.findById(product);
    if (!productExists) {
        throw new ApiError(404, "Product not found");
    }

    // check if review exists
    const review = await Review.findOne({product:product,user:req.user._id});
    if (!review) {
        throw new ApiError(404, "Review not found");
    }

    await Review.findOneAndDelete({product:product,user:req.user._id});
    return res.status(200).json(new ApiResponse(200, "Review removed successfully"));
});
// update review
const updateReview = asyncHandler(async (req, res) => {
    // get product id, rating and comment from frontend
    const {product} = req.params;
    const {rating, comment } = req.body;

    // check if product exists
    const productExists = await Product.findById(product);
    if (!productExists) {
        throw new ApiError(404, "Product not found");
    }

    // check if review exists
    const review = await Review.findOne({product:product,user:req.user._id});
    if (!review) {
        throw new ApiError(404, "Review not found");
    }
    const updatedReview = await Review.findOneAndUpdate({product:product,user:req.user._id},{
        rating,
        comment
    },{new:true});

    return res.status(200).json(new ApiResponse(200, "Review updated successfully",updatedReview));
}  );
// get reviews
const getReviews = asyncHandler(async (req, res) => {
    // get product id from frontend
    const {product} = req.params;

    // check if product exists
    const productExists = await Product.findById(product); 
    if (!productExists) {
        throw new ApiError(404, "Product not found");
    }

    const reviews = await Review.find({product:product}).populate("user");
    return res.status(200).json(new ApiResponse(200, "Reviews fetched successfully", reviews));
});




export  {
    addReview,
    removeReview,
    getReviews,

    updateReview

}
