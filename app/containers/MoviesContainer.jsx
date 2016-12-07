"use strict";

/*
 *  Container to wrap Component and dispatch actions.
 */
const react = require('react');
const { connect } = require('react-redux');
const MoviesPage = require('../components/MoviesPage.jsx');
const { fetch_movies, fetch_movies_success } = require('../actions/movies.js');


const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        get_movies: () => {
            const result = dispatch(fetch_movies());
            result.payload.then((response) => {
                if(response.statusCode == 200){
                    dispatch(fetch_movies_success(JSON.parse(response.text)));
                }
            });
        }
        
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(MoviesPage);