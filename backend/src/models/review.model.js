import mongoose,{Schema} from "mongoose";

const reviewSchema = new mongoose.Schema({
    product: {
        type:mongoose.Schema.Types.ObjectId,
        ref : "Product",
        required:true
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref : "User",
        required:true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
},
     {timestamps:true});

// Add indexes for frequently queried fields to improve query performance
reviewSchema.index({ product: 1 });
reviewSchema.index({ user: 1 });
reviewSchema.index({ product: 1, user: 1 });

export const Review = mongoose.model("Review", reviewSchema);