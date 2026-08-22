const pool = require("./pool");

async function getAllMessages() {
    console.log(process.env.connectStr)
    const { rows } = await pool.query("SELECT * FROM messages;");
    return rows;
};

async function getMessage(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1;", [id])
    return rows[0];
}

async function insertMessage(m) {
    await pool.query("INSERT INTO messages (message, author) VALUES ($1, $2, $3);", [m.message, m.author, new Date()]);
}

module.exports = {
    getAllMessages,
    insertMessage,
    getMessage
}