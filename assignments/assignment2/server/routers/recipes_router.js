const express = require("express");
const recipeController = require("../controllers/recipe_controller");

const router = express.Router();


router.get("/", recipeController.getAllRecipes);
router.post("/", recipeController.addRecipe);
router.get("/:id", recipeController.getRecipeById);
router.put("/:id", recipeController.updateRecipe);
router.delete("/:id", recipeController.deleteRecipe);



module.exports = router;