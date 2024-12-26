import mongoose from "mongoose";
import { User } from "../models/User.model.js";
import { Product } from "../models/Product.model.js";
import { Order } from "../models/Order.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const addToCart = asyncHandler(async (req, res, next) => {
    // find user id 
    const userID = req.user._id;
    const user = await User.findById(userID);
    // find product id
    const { productID } = req.body

    // check if product exists
    const product = await Product.findById(productID);

    if (!product) {
        return next(new ApiError(404, "Product not found"));
    }
    const products = [];
    // check if order already exists
    const existingOrder = await Order.findOne({ user: userID });
    if (existingOrder) {
        existingOrder.products.push({
            product: productID,
            quantity: 1,
        });
        existingOrder.totalPrice += product.price;
        await existingOrder.save();
        return res
            .status(200)
            .json(new ApiResponse(200, "Product added to cart", existingOrder));
    }

    else {
        products.push({
            product: productID,
            quantity: 1,
        });
        // create new order
        const order = await Order.create({
            user: userID,
            products,
            totalPrice: product.price,
            shippingAddress: user.address,
        });

        return res
            .status(201)
            .json(new ApiResponse(201, "Order created", order));

    }

});

const getOrders = asyncHandler(async (req, res, next) => {
    const orders = await Order.find({ user: req.user._id }).populate("products.product");
    res.status(200).json(new ApiResponse(200, "Orders fetched", orders));
});

const deleteOrder = asyncHandler(async (req, res, next) => {
    const {productID} = req.body;
    const order = await Order.findOne({user:req.user._id}).populate("products.product");
    const product = order.products.find(p =>String(p._id) === String(productID));
    if (!product){
        return next(new ApiError(404, "Product not found"));
    }
    const updatedOrder = await Order.findOneAndUpdate(
        { user: req.user._id },
        {
            $pull: { products: { _id: productID } }, // Remove product from products array
            $inc: { totalPrice: -product.product.price }, // Adjust totalPrice
        },
        { new: true } // Return the updated document
    );
    res.status(200).json(new ApiResponse(200, "Order deleted", updatedOrder));
});

export { addToCart, getOrders, deleteOrder };

