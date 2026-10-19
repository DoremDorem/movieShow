import mongoose from "mongoose";

export const connectDb=async()=>{
    try {
        mongoose.connection.on("connected",()=>console.log("mongo db connected"));
        await mongoose.connect(`${process.env.MONGO_URI}/movie`);
    } catch (error) {
        console.log("error in mongoose",error)
    }
}