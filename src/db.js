import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

//-------------------------- Conection a DB ---------------------------
export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
        console.log("MongoDB is connected")
    } catch (error) {
        console.log(error)
    }
};