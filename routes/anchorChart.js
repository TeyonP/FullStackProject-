const express = require('express');
const router = express.Router();

const Sequelize = require('sequelize');
const { anchorChart } = require('../models');

router.get('/', async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const chart = await anchorChart.findAll();
    res.json(chart);
})

module.exports = router;