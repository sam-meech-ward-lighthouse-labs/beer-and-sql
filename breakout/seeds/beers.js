
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('beer').del()
    .then(function () {
      // Inserts seed entries
      return knex('beer').insert([
        {id: 1, type_of_beer: 'stout', price: 1000},
        {id: 2, type_of_beer: 'pilsner', price: 400},
        {id: 3, type_of_beer: 'ipa', price: 500},
        {id: 4, type_of_beer: 'hefewiesern', price: 450},
        {id: 5, type_of_beer: 'larger', price: 450},
      ]);
    });
};
