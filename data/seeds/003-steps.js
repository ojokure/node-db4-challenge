
exports.seed = function(knex) {
  return knex('steps').truncate()
    .then(function () {
      return knex('steps').insert([
        {id: 1, instructions:'mix',recipe_id: 1,},
        {id: 2, instructions:'bake',recipe_id: 2,},
        {id: 3, instructions:'stir', recipe_id: 2,},
        {id: 4, instructions:'cool', recipe_id: 3,},

      ]);
    });
};
