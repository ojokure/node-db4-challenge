const express = require("express");

const Recipes = require("../Recipes/recipes-Model");

const recipeRouter = express.Router();

recipeRouter.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

recipeRouter.get("/:id/shoppingList", (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then(list => {
      res.status(200).json(list)
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get the lists" });
    });
});

recipeRouter.get("/:id/instructions", (req, res) => {
    Recipes.getInstructions(req.params.id)
      .then(instruction => {
        res.status(200).json(instruction)
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to get an instruction" });
      });
  });

module.exports = recipeRouter;
