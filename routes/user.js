const express = require('express');
const router = express.Router();

const Sequelize = require('sequelize');
const { User } = require('../models');

router.get('/', async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const user = await User.findAll();
    res.json(user);
});

module.exports = router;
