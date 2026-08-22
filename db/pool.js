const { Pool } = require("pg");

const {HOST, USER, DATABASE, PASSWORD, PORT} = process.env;

module.exports = new Pool({
  connectionString: `postgresql://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`
});