const express = require('express');

const database = require('./database');
const queries = require('./queries');

database.client.connect();


const app = express();

app.get('/beers/:price', (req, res) => {
  const price = req.params.price;
  queries.getBeersBelowPrice(database.client, price);
  res.send("👍");
})

app.listen(3000, () => {
  
});