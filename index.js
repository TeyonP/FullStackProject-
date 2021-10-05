const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

<<<<<<< HEAD
// const es6Renderer = require("express-es6-template-engine");
// app.engine("html", es6Renderer);
// app.set("views", "templates");
// app.set("view engine", "html");

const server = http.createServer(app);
// const db = require("./db");

app.get('/user', async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const user = await User.findAll();
    res.json(user);
})
=======
const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "./shopping_page");
app.set("view engine", "html");

require("./startup/routes")(app);
>>>>>>> 0970284b83cbd3e85e345210c402425d83e1bca9

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
