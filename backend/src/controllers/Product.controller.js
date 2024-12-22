import mongoose from "mongoose";
import { User } from "../models/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";


// add product
const addProduct = asyncHandler(async (req, res) => {
    
});

// update product
const updateProduct = asyncHandler(async (req, res) => {});

// delete product
const deleteProduct = asyncHandler(async (req, res) => {});
// get all products
const getAllProducts = asyncHandler(async (req, res) => {});
// get product by id
const getProductById = asyncHandler(async (req, res) => {});
// get products by category
const getProductsByCategory = asyncHandler(async (req, res) => {});
// get products by seller
const getProductsBySeller = asyncHandler(async (req, res) => {});
// get products by price range
const getProductsByPriceRange = asyncHandler(async (req, res) => {});
// get products by rating
const getProductsByRating = asyncHandler(async (req, res) => {});
