const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Wassupp",
    user: "Mickey",
    added: new Date()
  },
  {
    text: "Sling it!",
    user: "User124",
    added: new Date()
  },
  {
    text: "Hey world",
    user: "Ted",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages});
});

indexRouter.get("/new", (req, res) => {
    res.render("form")
});

indexRouter.get("/:id", (req, res) => {
    const index = Number(req.params.id);
    if (Number.isNaN(index) || index >= messages.length || !messages[index]) {
        res.status(404);
        res.render("404");
        return;
    }
    res.render("message", {message: messages[index]});
})

indexRouter.post("/new", (req, res) => {
    messages.push({text: req.body.messageText, user: req.body.authorName, added: new Date()});
    res.redirect("/");
})

module.exports = indexRouter;