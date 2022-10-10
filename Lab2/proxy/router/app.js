require('dotenv').config();
const express = require('express');
const app = express();
var conf = require('../service/config.js');
const axios = require('axios');
const v = express.Router();

app.use("/", v);

v.get("/", (request, response) => {
    response.redirect(conf.get('url'));
});

module.exports = app;