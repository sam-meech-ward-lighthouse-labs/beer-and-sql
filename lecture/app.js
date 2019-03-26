const database = require('./database');
const queries = require('./queries');

database.client.connect();

const arg = process.argv[2];
queries.getBeersBelowPrice(database.client, arg);
