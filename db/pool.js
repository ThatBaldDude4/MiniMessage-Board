const { Pool } = require("pg");

const {HOST, USER, DATABASE, PASSWORD, PORT, MSG_URL, connectStr} = process.env;

module.exports = new Pool({
  connectionString: MSG_URL,
});