"use strict";

/*
 *  Action for Movies. The actions fetch most popular movies and search movies.
 */

const { FETCH_MOVIES, FETCH_MOVIES_SUCCESS } = require('../constants/constants');
const Promise = this.Promise || require('promise');
const agent = require('superagent-promise')(require('superagent'), Promise);

module.exports = {
    fetch_movies: function(){
        const result = agent.get('/movies').query().set('Accept', 'application/json').end();
        return {
            type: FETCH_MOVIES,
            payload: result
        }
    },
    fetch_movies_success: function(data){
        return {
            type: FETCH_MOVIES_SUCCESS,
            payload: data
        }
    },
    search_movie: function(query){
        const result = agent.get('/movies_query').query({query: query}).set('Accept', 'application/json').end();
        return {
            type: FETCH_MOVIES,
            payload: result
        }
    },
    search_movie_success: function(data){
        return {
            type: FETCH_MOVIES_SUCCESS,
            payload: data
        }
    }
}