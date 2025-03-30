const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "A recipe must have a name"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "A recipe must have a description"],
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        required: [true, "A recipe must have a difficulty level."],
    },
    ingredients:{
        type: [String],
        required: [true, "A recipe must have ingredients"],
    },
    steps: {
        type: [String],
        required: [true, "A recipe must have steps"],
    }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;