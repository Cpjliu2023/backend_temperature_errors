require('dotenv').config();
const { Pool } = require('pg');

const connectionString = process.env.DB_HOSTED_URL;

const pool = new Pool({
  connectionString,
});

pool.on('connect', () => {
  console.log('Connected to the PostgreSQL database');
});

module.exports = pool;
