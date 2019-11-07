const db = require("../data/dbConfig");

module.exports = {
  getShoppingList
};

function getShoppingList() {
  return db("schemes");
}
