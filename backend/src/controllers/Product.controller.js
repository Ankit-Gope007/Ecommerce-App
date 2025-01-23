import mongoose from "mongoose";
import { User } from "../models/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Product } from "../models/Product.model.js";


// add product
const addProduct = asyncHandler(async (req, res) => {
    // get product details from frontend
    const { name, price, description, category, countInStock } = req.body;

    // if (!name || !price || !description || !category || !countInStock) {
    //     throw new ApiError(400, "Please provide all details");
    // }
    if (!name){
        throw new ApiError(400, "Please provide product name");
    }
    if (!price){
        throw new ApiError(400, "Please provide product price");
    }
    if (!description){
        throw new ApiError(400, "Please provide product description");
    }
    if (!category){
        throw new ApiError(400, "Please provide product category");
    }
    if (!countInStock){
        throw new ApiError(400, "Please provide product count in stock");
    }

    // get product images from frontend

    let imageUrlPath;
    let imagePath=[];

    if (req.files && Array.isArray(req.files.imageUrl) && req.files.imageUrl.length > 0) {
        for (let i = 0; i < req.files.imageUrl.length; i++) {
            imageUrlPath = req.files.imageUrl[i].path;
            const imageUrl = await uploadOnCloudinary(req.files.imageUrl.buffer);
            if (!imageUrl) {
                throw new ApiError(500, "Image upload failed 1");
            }
            imagePath[i] = imageUrl.url;
        }
    }
    // const imagePath = [];

    // if (req.files?.imageUrl?.length) {
    //     for (const file of req.files.imageUrl) {
    //         const result = await uploadOnCloudinary(file.buffer);
    //         if (!result?.url) {
    //             throw new ApiError(500, "Image upload failed");
    //         }
    //         imagePath.push(result.url);
    //     }
    // }


    if (!imagePath) {
        throw new ApiError(500, "Image upload failed 2");
    }

    // save product details and images to database
    const product = await Product.create({
        name,
        price,
        description,
        seller: req.user._id,
        imageUrl: imagePath,
        category,
        countInStock
    });


    // return success response
    return res
    .status(201)
    .json(new ApiResponse(201, "Product added successfully", product));

});

// update product
const updateProduct = asyncHandler(async (req, res) => {
    // get product id and updated details from frontend
    const { id } = req.params;
    const { name, price, description, category, countInStock } = req.body;

    // find product by id and update
    const product = await Product.findByIdAndUpdate(
        id,
        {
            name,
            price,
            description,
            category,
            countInStock
        },
        { new: true }
    );

    // return success response
    return res
    .status(200)
    .json(new ApiResponse(200, "Product updated successfully", product));
});

// delete product
const deleteProduct = asyncHandler(async (req, res) => {
    // get product id from frontend
    const { id } = req.params;

    // find product by id and delete
    const product = await Product.findByIdAndDelete(id);

    // return success response
    return res
    .status(200)
    .json(new ApiResponse(200, "Product deleted successfully", null));
});
// get all products
const getAllProducts = asyncHandler(async (req, res) => {
    // get all products from database
    const products = await Product.find({});

    // return success response
    return res
    .status(200)
    .json(new ApiResponse(200, "All products", products));
});
// get product by id
const getProductById = asyncHandler(async (req, res) => {
    // get product id from frontend
    const { id } = req.params;

    // find product by id
    const product = await Product .findById(id);

    // return success response
    return res
    .status(200)
    .json(new ApiResponse(200, "Product", product));

});
// get products by category
const getProductsByCategory = asyncHandler(async (req, res) => {
    // get category from frontend
    const { category } = req.params;

    // find products by category
    const products = await Product.find({ category });

    // return success response
    return res
    .status(200)
    .json(new ApiResponse(200, "Products", products));
});
// get products by seller
const getProductsBySeller = asyncHandler(async (req, res) => {
    // get seller id from frontend
    const  sellerId  = req.user._id;

    // find products by seller id
    const products = await Product.find ({ seller: sellerId });

    // return success response
    return res
    .status(200)
    .json(new ApiResponse(200, products,"Products by seller"));
});
// get products by price range
const getProductsByPriceRange = asyncHandler(async (req, res) => {
    // get min and max price from frontend
    const { min, max } = req.body;

    // find products by price range
    const products = await Product.find({
        price: { $gte: min, $lte: max }
    });

    // return success response
    return res
    .status(200)
    .json(new ApiResponse(200, "Products", products));
});
// get products by rating
const getProductsByRating = asyncHandler(async (req, res) => {
    // get rating from frontend
    const { rating } = req.params;

    // find products by rating
    const products = await Product.find({ rating});

    // return success response
    return res
    .status(200)
    .json(new ApiResponse(200, "Products", products));
});



export {
    addProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    getProductsByCategory,
    getProductsBySeller,
    getProductsByPriceRange,
    getProductsByRating
};
