const { Router } = require("express");
const indexRouter = Router();
const {
    usersListGet,
    userGet,
    insertNewMessage
} = require("../controllers/indexController");

indexRouter.get("/", usersListGet);

indexRouter.get("/new", (req, res) => {
    res.render("form")
});

indexRouter.get("/:id", userGet)

indexRouter.post("/new", insertNewMessage)

module.exports = indexRouter;