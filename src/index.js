// require("dotenv").config()
// The upper code is also correct but it doesn't mainatain the consistency of using ES6 imports

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
});





connectDB();





/*
First approach using IIFE with async/await

;(async () => {            // IIFE to use async/await at the top level
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error connecting to the server");
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}) ()
*/