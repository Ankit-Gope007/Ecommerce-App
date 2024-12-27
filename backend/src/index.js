import dotenv from "dotenv"
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 8000



dotenv.config({
    path:'./env'
})


connectDB()
.then(() => { 
    try {
        app.listen(port);
        console.log(`Server is listening on port ${process.env.PORT}` );
    } catch (error) {
        app.on("error",(error) => {
            console.log("ERROR:",error);
            throw error
        })
    }
    
})
.catch((err) => { 
    console.log("Mongo DB connection failed",err);
    
})
