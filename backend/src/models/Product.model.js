import mongoose,{Schema} from "mongoose";

const productSchema = new mongoose.Schema({
    seller: {
        type:mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: { 
        type: [String],
        required: true },
    category: {
        type: String,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type:mongoose.Schema.Types.ObjectId,
                ref : "User",
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ]
}
    ,{timestamps:true});

export const Product = mongoose.model("Product", productSchema);