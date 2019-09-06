'use strict';

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const h = require('./app_settings.json');

// https://blog.openshift.com/run-your-nodejs-projects-on-openshift-in-two-simple-steps/
const host = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || h.host;
const port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || h.port;


const routes = require('./routes');
routes(app, io);

http.listen(port, host, e => {
    (e) ? console.error(`Occurred an error :  ${e}`) : console.info(`Host listening : http://${host}:${port}`);
});