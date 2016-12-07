"use strict";

/*
 *  Container to wrap Component and dispatch actions.
 */
const react = require('react');
const { connect } = require('react-redux');
const MainPage = require('../components/MainPage.jsx');


const mapStateToProps = (state) => {
    return state;
}

module.exports = connect(mapStateToProps)(MainPage);