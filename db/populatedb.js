const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author VARCHAR ( 255 ),
    message VARCHAR ( 255 ),
    create_at TIMESTAMP default CURRENT_TIMESTAMP
);
`;

async function populatedb() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.MSG_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

populatedb();