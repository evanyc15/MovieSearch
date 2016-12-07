"use strict";

// CommonJS inclusion of ReactJS Dependencies
const React = require('react');
const { pushState } = require('redux-router');
const NavbarPage = require('../containers/NavbarContainer.jsx');

module.exports = class MainPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {}
    }
    render(){
        return (
            <div>
                <NavbarPage />
                <div id="bodyContainer">
                    {this.props.body}
                </div>
            </div>
        )
    }
}