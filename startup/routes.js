const express = require('express');
const user = require('../routes/user');
const anchorChart = require('../routes/anchorChart');

module.exports = function (app) {
    app.use(express.json());
    app.use('/user', user);
    app.use('/anchorChart', anchorChart);
}