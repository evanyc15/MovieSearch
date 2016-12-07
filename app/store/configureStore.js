"use strict";

/*
 * Configures the Store by supplying reducers and middleware.
 */
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const reducers = require('../reducers/index.js');

module.exports = createStore(
   reducers,
   applyMiddleware(thunk)
);