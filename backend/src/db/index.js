import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
import dotenv from 'dotenv';


const connectDB = async () => { 
    try {
        console.log("Attempting to connect the DB");
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI }/${DB_NAME}`);
        console.log(`MongoDB connected !!!  DB HOST  ${connectionInstance.connection.host}`);
        
        
        
    } catch (error) {
        console.log("MongoDB connection failed", error);
        process.exit(1);
        
    }
  }

export default connectDB;