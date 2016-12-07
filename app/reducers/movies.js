"use strict";

/*
 * Reducer to return movies state object
 */
const { combineReducers } = require('redux');
const { FETCH_MOVIES, FETCH_MOVIES_SUCCESS } = require('../constants/constants');

const INITIAL_STATE = {
    movies: []
}

module.exports = function(state = INITIAL_STATE, action) {
    switch(action.type){
        case FETCH_MOVIES:
            return state;
        case FETCH_MOVIES_SUCCESS:
            return Object.assign({}, state, {
                movies: action.payload
            });
        default:
            return state;
    }
}