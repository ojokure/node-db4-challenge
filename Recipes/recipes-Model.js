const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  getInstructions 
};

function getRecipes() {
  return db("recipes");
}