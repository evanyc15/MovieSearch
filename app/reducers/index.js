"use strict";

/*
 * Combines the reducers
 */
const { combineReducers } = require('redux');
const movies = require('./movies.js');
const { syncHistoryWithStore, routerReducer } = require('react-router-redux');

// Combine reducers with routeReducer which keeps track of
// router state
module.exports = combineReducers({
  movies,
  routing: routerReducer
});