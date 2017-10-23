'use strict';

const layout = require('./views/layout');

module.exports = (app) => {
    app.get('*', (req, res) => {
        res.send(layout());
    });
};