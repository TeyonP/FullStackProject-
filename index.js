const Sequelize = require('sequelize');
const { User, anchorChart } = require('./models');
// console.log(User);

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/user', async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const user = await User.findAll();
    res.json(user);
})

app.get('/anchorChart', async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const chart = await anchorChart.findAll();
    res.json(chart);
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
