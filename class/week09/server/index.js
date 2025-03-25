import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import book_router from "./routers/book_routers.js";
import user_router from "./routers/user_router.js";


const app = express();
dotenv.config();

//middleware
app.use(cors());
app.use(express.json()); //JSON information
app.use(express.urlencoded({extended: true})); //HTML forms


const PORT = process.env.PORT || 6000;


mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("DB is connected");
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
});


app.use("/book", book_router);
app.use("/user", user_router);