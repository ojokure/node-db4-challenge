exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table => {
      table.increments();
      table
        .string("recipe_name", 102)
        .unique()
        .notNullable();
    })
    .createTable("ingredients", table => {
      table.increments();
      table
        .string("ingredient_name", 128)
        .unique()
        .notNullable();
    })
    .createTable("steps", table => {
      table.increments();
      table.string("instructions", 300).notNullable();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
    })
    .createTable("combinations", table => {
      table.increments();
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      table.string("Qty", 20).notNullable();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("combinations");
};
