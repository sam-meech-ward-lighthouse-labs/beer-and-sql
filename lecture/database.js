const { Client } = require('pg');

const config = {
  host: '192.168.200.200',
  database: 'sam',
  user: 'sam',
  password: ''
};

const client = new Client(config);

exports.client = client;