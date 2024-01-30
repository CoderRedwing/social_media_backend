// require ('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import  express  from "express";
import connectDB from "./db/index.js";
import e from "express";

dotenv.config({
    path: './env'
})


connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERROR:",error);
        throw error
    })

    app.listen(process.env.PORT||3000,()=>{
        console.log(`App is listening on port:
         ${process.env.PORT}`);
    })
})
.catch((error)=>{
 console.log("MONGODB connecton FAILED !!",error);
})











/*
const app = Express()

(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("ERROR:",error);
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
       })
    } catch (error) {
        console.error("ERROR:",error)
        throw err
    }
})()
*/