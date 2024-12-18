import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["buyer", "seller"], 
        default: "buyer"
    },
    address: {
        type: String,
        required: true
    },
}
    , { timestamps: true });

export const User = mongoose.model("User", userSchema);