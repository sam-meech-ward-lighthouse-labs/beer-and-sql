
exports.up = function(knex, Promise) {
  return knex.schema.createTable('chicken', function (table) {
    table.increments().primary();
    table.string('flavour');
    table.integer('price');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('chicken');
};
