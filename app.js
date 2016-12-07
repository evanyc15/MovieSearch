"use strict";

// Main Express/Node application root file
// External node modules
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Internal node modules
const path = require('path');

// Start up an Express application
const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use(new require('./routes/movies')(router));

// Serving ReactJS Static files path
app.use(express.static(path.join(__dirname,"app/dist")));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.join(__dirname,"app/dist/index.html"))
})

app.listen(port, function(req, res) {
    console.log('Dev Server listening on port ' + port);
});