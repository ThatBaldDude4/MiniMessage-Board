const { getAllMessages, insertMessage, getMessage } = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const lengthErr = "must be between 2 and 255 characters."

const validateUser = [
    body("messageText").trim()
        .isLength({min: 2, max: 255}).withMessage(`Message ${lengthErr}`),
    body("authorName").trim()
        .isLength({min: 2, max: 255}).withMessage(`Author ${lengthErr}`),
]

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

exports.insertNewMessage = [
    validateUser,
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("form", {
                errors: errors.array(),
            })
        }
        const { messageText, authorName } = matchedData(req);
        const message = {
            message: messageText,
            author: authorName,
        }
        insertMessage(message);
        res.redirect("/");
    }
]