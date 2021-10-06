const http = require("http");

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;
const db = require("./models");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/shoppingpage", (req, res) => {
  // console.log("route is working");
  // res.json({});
  db.anchorChart.findAll().then(results => {
    console.log(results);
    // res.json({});
    res.render("shopping_page", {
      locals: {
        anchorCharts: results
      }
    });
  });
});
require("./startup/routes")(app);

app.listen(port, () => {
  console.log(`Server running https://${hostname}/${port}`);
});
