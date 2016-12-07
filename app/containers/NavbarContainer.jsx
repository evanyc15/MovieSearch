"use strict";

/*
 *  Container to wrap Component and dispatch actions.
 */
const react = require('react');
const { connect } = require('react-redux');
const NavBarPage = require('../components/NavBarPage.jsx');
const { search_movie, search_movie_success, fetch_movies, fetch_movies_success } = require('../actions/movies.js');

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       query_movies: (query) => {
            if(query){
                const result = dispatch(search_movie(query));
                result.payload.then((response) => {
                    if(response.statusCode == 200){
                        dispatch(search_movie_success(JSON.parse(response.text)));
                    }
                });
            } else {
                const result = dispatch(fetch_movies());
                result.payload.then((response) => {
                    if(response.statusCode == 200){
                        dispatch(fetch_movies_success(JSON.parse(response.text)));
                    }
                });
            }
        }
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(NavBarPage);