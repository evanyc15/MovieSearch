"use strict";

// CommonJS inclusion of ReactJS Dependencies
const React = require('react');
const {Nav, Navbar, NavItem, FormGroup, FormControl, Button} = require('react-bootstrap');

module.exports = class NavbarPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    search(){
        var input = document.getElementById("search");

        this.props.query_movies(input.value);
    }
    render(){
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Movie Search</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form>
                        <FormGroup>
                          <FormControl type="text" placeholder="Search" id="search"/>
                        </FormGroup>
                        {' '}
                        <Button bsStyle="success" onClick={() => this.search()}>Search</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}