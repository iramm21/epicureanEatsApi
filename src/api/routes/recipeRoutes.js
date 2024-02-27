const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

// GET all recipes
router.get("/", recipeController.getAllRecipes);

// POST a new recipe
router.post("/", recipeController.createRecipe);

// UPDATE a recipe
router.put("/:id", recipeController.updateRecipe);

// DELETE a recipe
router.delete("/:id", recipeController.deleteRecipe);

module.exports = router;
