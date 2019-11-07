const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db.select("ingredient_name", "Qty").from("recipes as r")
  .join("combinations as c", "r.id", "=", "c.recipe_id")
  .join("ingredients as i","c.ingredient_id","=","i.id")
  .where({"r.id" : recipe_id})
}


function getInstructions(recipe_id) {
  return db.select("steps.*").from("recipes")
  .join("steps","recipes.id","=","steps.recipe_id")
  .where({"recipes.id" : recipe_id})
}


// select steps.* from recipes
// join steps on recipes.id = steps.recipe_id
// order by recipes.id;

// function findSteps(schemeId) {
//   return db("schemes as s")
//     .join("steps as st", "st.step_number", "s.id")
//     .select("s.scheme_name", "st.instructions", "st.step_number")
//     .where({ "s.id": schemeId });
// }

//     select ingredient_name, Qty from recipes as r
// join combinations as c on r.id = c.recipe_id
// join ingredients as i on  c.ingredient_id = i.id
// order by r.id;