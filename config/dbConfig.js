// // config/dbConfig.js
// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost', // Change to your PostgreSQL host
//   database: 'postgres', // Change to your PostgreSQL database name
//   password: 'postgres', // Change to your PostgreSQL password
//   port: 5432, // Default PostgreSQL port
// });

require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432, // Default PostgreSQL port
});

// Rest of your dbConfig.js


pool.on('connect', () => {
  console.log('Connected to the PostgreSQL database');
});

module.exports = pool;
