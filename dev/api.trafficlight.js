const express = require('express');
const lib = require("./trafficlight");

// Export API as a function that returns a router
module.exports = app => {
    // Welcome message route
    app.get('/api/welcome', (req, res) => {
        res.status(200).json({
            message: "Welcome to Traffic-Light!",
            status: 'success'
        });
    });

    // Traffic light default route
    app.get('/api/trafficlight', (req, res) => {
        res.status(200).json({
            message: lib.trafficLight(undefined),
            status: 'success'
        });
    });

    // Traffic light color routes
    app.get('/api/trafficlight/:color', (req, res) => {
        let color = req.params.color;
        res.status(200).json({
            message: lib.trafficLight(color),
            status: 'success'
        });
    });
};
