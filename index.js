const http = require("http");

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;
const db = require("./models");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const Sequelize = require("sequelize");
const { anchorChart } = require("./models");

const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.get("/", async (req, res) => {
  // res.setHeader("Content-Type", "application/json");
  const chart = await anchorChart.findAll();
  res.render('shopping_page', {
      locals: {
          anchorCharts: chart
      }
  });
});

/*app.get("/shoppingpage", (req, res) => {
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
});*/
require("./startup/routes")(app);

app.listen(port, () => {
    console.log(`Server running `);
    console.log(`Server running https://${hostname}/${port}`);
});
