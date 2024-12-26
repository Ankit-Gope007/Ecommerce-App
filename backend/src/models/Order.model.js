import mongoose,{Schema} from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref : "User",
        required:true
    },
    products: [
        {
            product: {
                type:mongoose.Schema.Types.ObjectId,
                ref : "Product",
                required:true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    },  
    paymentMethod: {
        type: String,
        default: "cash",
    },
    orderStatus: {
        type: String,
        enum: [ "processing", "shipped", "delivered"],
        default: "processing"
    },
    shippingAddress: {
        type: String,
        required: true
    },
},
     {timestamps:true});

export const Order = mongoose.model("Order", orderSchema);