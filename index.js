const http = require("http");
var passport = require("passport");
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;
const db = require("./models");
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { User } = require("./models");
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(passport.initialize());
const Sequelize = require("sequelize");
const { anchorChart } = require("./models");

const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");
app.use(express.static(__dirname + "/templates"));
app.use(express.static(path.join(__dirname, "templates")));

app.get("/", async (req, res) => {
  // res.setHeader("Content-Type", "application/json");
  //   res.send("hello world");
  const chart = await anchorChart.findAll();
  res.render("landing_page", {
    locals: {
      anchorCharts: chart
    }
  });
});

app.get("/shoppingpage", async (req, res) => {
  const chart = await anchorChart.findAll();
  res.render("shopping_page", {
    locals: {
      anchorCharts: chart
    }
  });
});

var GoogleStrategy = require("passport-google-oauth20").Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "383031332244-i1d90tbdu5a3pt56t0sg9s8heu34qbps.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"]
  })
);

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/shoppingpage");
  }
);

app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const oneChart = await anchorChart.findByPk(id);
  console.log(oneChart);
  res.render("product", {
    locals: {
      oneChart
    }
  });
});

app.get("/admin", (req, res) => {
  // console.log("route is working");
  // res.json({});
  db.anchorChart.findAll().then(results => {
    console.log(results);
    // res.json({});
    res.render("admin_page", {
      locals: {
        anchorCharts: results
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server running `);
  console.log(`Server running https://${hostname}/${port}`);
});

require("./startup/routes")(app);
