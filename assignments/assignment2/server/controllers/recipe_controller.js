const Recipe = require('../models/recipe');

const addRecipe = (req, res) => {
    const {name, description, difficulty, ingredients, steps} = req.body;

    const newRecipe = new Recipe({
        name, description, difficulty, ingredients, steps
    });

    newRecipe.save().then(() => {
        res.json({message: "Recipe added"});
    }).catch(error => res.status(400).json({message: `Error adding recipe. Error: ${error}`}));
}

const getAllRecipes = (req, res) => {
    Recipe.find().then((recipes) => {
        res.json(recipes);
    }).catch(error => res.status(500).json({message:`Error fetching recipes. Error: ${error}`}));
}

const getRecipeById = (req, res) => {
    Recipe.findById(req.params.id).then((recipe) => {
        res.json(recipe);
    }).catch(error => res.status(500).json({message:`Error fetching recipe by id. Error: ${error}`}));
}

const updateRecipe = (req, res) => {
    const {name, description, difficulty, ingredients, steps} = req.body;

    const updatedRecipe = {name, description, difficulty, ingredients, steps};
    Recipe.findByIdAndUpdate(req.params.id, updatedRecipe, {runValidators: true}).then(() => {
        res.json({message: "Recipe updated"});
    }).catch(error => res.status(400).json({message: `Error updating recipe. Error: ${error}`}));
};

const deleteRecipe = (req, res) => {
    Recipe.findByIdAndDelete(req.params.id).then(() => {
        res.json({message: "recipe deleted"});
    }).catch(error => res.status(500).json({message: `Error deleting recipe. Error: ${error}`}));
}

module.exports = {
    addRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
}