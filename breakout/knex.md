# knex

## Setup

## Query Builder

1. First you build the query.
2. Then you execute the query.

1. `const query = knex('beers').select();`
2. `query.asCallback()`, `query.then()`

## Migrations

NEVER ALTER PREVIOUS MIGRATION FILES!!!!!

## Seeds

---

## Snippets

```js
const knexfile = require('./knexfile');
const environment = process.env.NODE_ENV || 'development';
const knex = require('knex')(knexfile[environment]);
```