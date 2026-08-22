const { Pool } = require("pg");

const {HOST, USER, DATABASE, PASSWORD, PORT, connectStr} = process.env;

module.exports = new Pool({
  connectionString: connectStr,
});