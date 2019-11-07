
exports.seed = function(knex) {
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Cake'},
        {id: 2, recipe_name: 'Scrambled Eggs'},
        {id: 3, recipe_name: 'Dough'}
      ]);
    });
};
