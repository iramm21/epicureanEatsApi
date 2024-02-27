const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      name: String,
      quantity: String,
      note: String,
    },
  ],
  method: [String],
  cuisine: {
    type: String,
    required: true,
  },
  nutritionalInformation: {
    calories: String,
    protein: String,
    carbs: String,
    fats: String,
    sugar: String,
    sodium: String,
  },
  prepTime: String,
  cookTime: String,
  totalTime: String,
  servings: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
