const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "./shopping_page");
app.set("view engine", "html");

require("./startup/routes")(app);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
