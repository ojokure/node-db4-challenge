const express = require("express");

const Recipes = require('../Recipes/recipes-Model')

const recipeRouter = express.Router();


recipeRouter.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });


  module.exports = recipeRouter;
