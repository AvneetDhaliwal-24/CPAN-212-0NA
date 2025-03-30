const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const recipe_router = require("./routers/recipe_router");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to mongodb");
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`)
    })
});


app.use("/recipe", recipe_router);

app.use((req, res) => {
    res.status(404).json({ message: 'API route not found' });
});