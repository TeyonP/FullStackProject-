const http = require("http");

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "./shopping_page");
app.set("view engine", "html");

app.get("/", (req, res) => {
    res.send("Hello World");
});

require("./startup/routes")(app);

app.listen(port, () => {
    console.log(`Server running `);
});
