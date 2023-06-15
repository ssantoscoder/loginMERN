import mongoose from "mongoose";

//-------------------------- Conection a DB ---------------------------
export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/loginDB", {useNewUrlParser: true});
        console.log(">>> DB is connected")
    } catch (error) {
        console.log(error)
    }
};