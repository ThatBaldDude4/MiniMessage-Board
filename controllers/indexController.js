const { getAllMessages, insertMessage, getMessage } = require("../db/queries");

exports.usersListGet = async (req, res) => {
    console.log("before")
    const messages = await getAllMessages();
    console.log("after")
    res.render("index", {
        title: "Message List",
        messages: messages,
    });
};

exports.userGet = async (req, res) => {
    const index = Number(req.params.id);
    if (Number.isNaN(index)) {
        res.status(404);
        res.render("404");
        return;
    }
    const message = await getMessage(index);
    res.render("message", {message: message});
};

exports.insertNewMessage = (req, res) => {
    const message = {
        message: req.body.messageText,
        author: req.body.authorName,
    }
    insertMessage(message);
    res.redirect("/");
}