const express = require('express');
const app = express();
const path = require("node:path");

const PORT = process.env.PORT || 8000;
const indexRouter = require("./routes/indexRouter");


app.use(express.urlencoded({extended: true}));
app.use("/", indexRouter);
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// route for catching any request not matched to a route (ie 404);
app.use((req, res) => {
    res.status(404).send("<h1>404! Page not found</h1>");
})

app.listen(PORT, "0.0.0.0", (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server running on port http://localhost:${PORT}`); 
}); 