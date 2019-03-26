# knex

Karl's notes:

https://github.com/jensen/knex-notes/

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

## Open Browser Tabs


* https://www.google.com/search?newwindow=1&biw=1097&bih=540&tbm=isch&sa=1&ei=4KGaXMyOHsPk8AOB15qgDA&q=knex+windmill&oq=knex+windm&gs_l=img.1.0.0j0i30j0i24.8874.9712..10613...0.0..0.66.306.6......1....1..gws-wiz-img.......0i67j0i8i30.kSr0jd6ulYg
* https://knexjs.org/#Seeds-API
