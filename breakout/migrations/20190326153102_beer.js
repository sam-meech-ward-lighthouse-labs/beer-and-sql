
exports.up = function(knex, Promise) {
  // Create table
  return knex.schema.createTable('beer', function (table) {
    table.increments().primary();
    table.string('type_of_beer');
    table.integer('price');
  });
};

exports.down = function(knex, Promise) {
  // Drop table
  return knex.schema.dropTableIfExists('beer');
};
