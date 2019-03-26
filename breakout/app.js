const knexfile = require('./knexfile');
const environment = process.env.NODE_ENV || 'development';
const knex = require('knex')(knexfile[environment]);

const query = knex('beers').select();
// const query = knex.raw('SELECT * FROM beers');

console.log(query.toSQL());

query.asCallback((err, beers) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(beers);
});

// .then
// .catch