const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

const Sequelize = require("sequelize");
const { User } = require("../models");

router.get("/", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const user = await User.findAll();
  res.json(user);
});

router.get("/:id", async (req, res) => {
  try {
    const oneUser = await User.findByPk(req.params.id);
    res.json(oneUser);
  } catch (e) {
    console.log(e);
    res.status(404).json({
      message: "User not found"
    });
  }
});

router.post("/", async (req, res) => {
  // req.body contains an Object with username, email, password
  const { username, email, password } = req.body;

  const previousUser = await User.findOne({ where: { email } }); //finds user in the database if user exists

  if (previousUser) return res.status(400).send("User already registered.");

  const newUser = await User.create({
    username,
    email,
    password
  });

  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);
  await newUser.save();

  // Send back the new user's ID in the response:
  res.json({
    id: newUser.id
  });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  // Assuming that `req.body` is limited to
  // the keys firstName, lastName, and email
  const updatedUser = await User.update(req.body, {
    where: {
      id
    }
  });

  res.json(updatedUser);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.destroy({
    where: {
      id
    }
  });
  res.json(deletedUser);
});

router.post("/registered", async (req, res) => {
  const { username, email, password } = req.body;
  //   console.log(username, email, password);
  //   res.json({ message: "User Created" });
  User.findAll({
    where: {
      username: username
    }
  }).then(users => {
    console.log(users);
    if (users.length == 0) {
      const passwordHash = bcrypt.hashSync(password, 10);
      User.create({
        username: username,
        email: email,
        password: passwordHash,
        isAdmin: false
      }).then(() => {
        res.json({ isRegistered: true, message: "User Created" });
      });
    } else {
      res
        .status(409)
        .json({ error: "User Already Exists", isRegistered: false });
    }
  });
});

router.post("/login", async (req, res) => {
  const { username, email, password } = req.body;
  User.findAll({
    where: {
      username: username
    }
  }).then(users => {
    if (users.length > 0) {
      let user = users[0];
      let passwordHash = user.password;
      if (bcrypt.compareSync(password, passwordHash)) {
        if (user.isAdmin) {
          res.json({ isAdmin: true, isLoggedIn: true });
        } else {
          res.json({ isAdmin: false, isLoggedIn: true });
        }
      } else {
        res.status(403).json({
          error: "Login failed, please check username and password",
          isLoggedIn: false
        });
      }
    } else {
      res.status(404).json({ error: "User does not exist", isLoggedIn: false });
    }
  });
});
module.exports = router;
