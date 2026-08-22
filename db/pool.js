const { Pool } = require("pg");

const {HOST, USER, DATABASE, PASSWORD, PORT} = process.env;

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
});