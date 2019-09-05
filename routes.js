'use strict';

const controls = require('require-dir')('./controllers');

// Socket.IO module it's in ' io ' parameter
module.exports = (app, io) => {

    var test_route = controls.main_ctrl()

    app.get('/route-test', test_route.routeSimpleResponse);

};