const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getInstructions(recipe_id) {
  return db.select("ingredient_name", "Qty").from("recipes as r")
  .join("combinations as c", "r.id", "=", "c.recipe_id")
  .join("ingredients as i","c.ingredient_id","=","i.id")
  .where({"r.id" : recipe_id})
}

