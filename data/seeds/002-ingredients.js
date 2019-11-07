exports.seed = function(knex) {
  return knex("ingredients")
    .truncate()
    .then(function() {
      return knex("ingredients").insert([
        { id: 1, ingredient_name: "egg" },
        { id: 2, ingredient_name: "flour" },
        { id: 3, ingredient_name: "butter" },
        { id: 4, ingredient_name: "sugar" },
        { id: 5, ingredient_name: "milk" }
      ]);
    });
};
