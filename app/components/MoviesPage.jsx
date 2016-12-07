"use strict";

// CommonJS inclusion of ReactJS Dependencies
const React = require('react');
const { Route } = require('react-router');
const { Row, Col, Button, PageHeader, Panel } = require('react-bootstrap');
const _ = require('lodash');
const Modal = require('react-modal');

module.exports = class MoviesPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false,
            title: null,
            poster_path: null,
            overview: null,
            popularity: null,
            release_date: null
        }
    }
    componentWillMount(){
        this.props.get_movies();
    }
    openModal(movie){

        this.setState({
            modalIsOpen: true,
            title: movie.title,
            poster_path: "http://image.tmdb.org/t/p/w500"+movie.poster_path,
            overview: movie.overview,
            popularity: movie.popularity,
            release_date: movie.release_date
        });
    }
    closeModal(){
        this.setState({
            modalIsOpen: false,
            title: null,
            poster_path: null,
            overview: null,
            popularity: null,
            release_date: null
        });
    }
    render(){
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        {
                            this.props.movies.results && _.chunk(this.props.movies.results, 6).map((row, i) => {
                                return <Row key={i}>
                                    {
                                        row && row.map((movie, j) => {
                                            var moviePath = null;
                                            if(movie.poster_path){
                                                moviePath = "http://image.tmdb.org/t/p/w500"+movie.poster_path;
                                            } else {
                                                moviePath = "../assets/img/placeholder_image.png";
                                            }
                                            return <Col xs={2} key={i+"."+j} className="movie-item-col">
                                                        <div className="movie-item" onClick={() => this.openModal(movie)}>
                                                            <img src={moviePath} />
                                                        </div>
                                                    </Col>
                                        })
                                    }
                                    </Row>
                            })
                        }
                    </Col>
                </Row>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    contentLabel="Modal"
                    style={{
                        content:{
                            padding: '30px'
                        }
                    }}
                >
                    <Row>
                        <Col xs={12}>
                            <PageHeader>{this.state.title} &nbsp; <Button bsStyle="info" bsSize="small" onClick={() => this.closeModal()}>Close</Button></PageHeader>
                            <Row>
                                <Col xs={4}>
                                    <img src={this.state.poster_path}/>
                                </Col>
                                <Col xs={8}>
                                    <Panel id="overview" header="Overview">
                                        {this.state.overview}
                                    </Panel>
                                    <Panel id="rating" header="Popularity Rating">
                                        {this.state.popularity}
                                    </Panel>
                                    <Panel id="date" header="Release Date">
                                        {this.state.release_date}
                                    </Panel>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Modal>
            </div>
        )
    }
}