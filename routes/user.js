const express = require('express');
const router = express.Router();

const Sequelize = require('sequelize');
const { User } = require('../models');

router.get('/', async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const user = await User.findAll();
    res.json(user);
});

router.get('/:id', async (req, res) => {
    try {
        const oneUser = await User.findByPk(req.params.id);
        res.json(oneUser);
    } catch (e) {
        console.log(e);
        res.status(404).json({
            message: 'User not found'
        });
    }
});

router.post('/', async (req, res) => {
    // req.body contains an Object with username, email, password
    const { username, email, password, } = req.body;
    const newUser = await User.create({
        username,
        email,
        password,
    });

    // Send back the new user's ID in the response:
    res.json({
        id: newUser.id
    });
});

router.put('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await User.destroy({
        where: {
            id
        }
    });
    res.json(deletedUser);
});


module.exports = router;
