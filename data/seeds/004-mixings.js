exports.seed = function(knex) {
  return knex("combinations")
    .truncate()
    .then(function() {
      return knex("combinations").insert([
        { id: 1, ingredient_id: 1, Qty: "1kg", recipe_id: 1 },
        { id: 2, ingredient_id: 2, Qty: "1cl", recipe_id: 1 },
        { id: 3, ingredient_id: 3, Qty: "2cl", recipe_id: 2 },
        { id: 4, ingredient_id: 1, Qty: "3kg", recipe_id: 3 }
      ]);
    });
};
