import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    clerk_id:{type:String,required:true},
    name:{type:String,trim:true},
    email:{type:String},
    image:{type:String,default:""}
});


export const User=mongoose.model("User",userSchema);