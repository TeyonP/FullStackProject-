const express = require("express");
const router = express.Router();

const Sequelize = require("sequelize");
const { anchorChart } = require("../models");

router.get("/", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const chart = await anchorChart.findAll();
  res.json(chart);
});

router.get("/:id", async (req, res) => {
  try {
    const oneChart = await anchorChart.findByPk(req.params.id);
    res.json(oneChart);
  } catch (e) {
    console.log(e);
    res.status(404).json({
      message: "Anchor Chart not found"
    });
  }
});

router.post("/", async (req, res) => {
  // req.body contains an Object with username, email, password
  const { subject, grade, topic, image, price } = req.body;
  const chart = await anchorChart.create({
    subject,
    grade,
    topic,
    image,
    price
  });

  // Send back the new user's ID in the response:
  res.json({
    id: chart.id
  });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  // Assuming that `req.body` is limited to
  // the keys firstName, lastName, and email
  const chart = await anchorChart.update(req.body, {
    where: {
      id
    }
  });

  res.json(chart);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const chart = await anchorChart.destroy({
    where: {
      id
    }
  });
  res.json(chart);
});

module.exports = router;
