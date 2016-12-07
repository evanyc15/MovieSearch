"use strict";

/*
 *  Main jsx file. This is the beginning of the React App and where the Store, History and Routers are established.
 */
const React = require("react");
const ReactDOM = require("react-dom");
const {Provider} = require('react-redux');
const store = require('../store/configureStore.js');
const { Router, IndexRoute, Route, browserHistory } = require('react-router');
const { syncHistoryWithStore } = require('react-router-redux');

const MainPage = require('../containers/MainContainer.jsx');
const MoviesPage = require('../containers/MoviesContainer.jsx');

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

function render(){
    ReactDOM.render(
    	<Provider store={store}>
    		<Router history={history}>
    			<Route path="/" component={MainPage}>
                    <IndexRoute components={{body: MoviesPage}} />
    			</Route>
    		</Router>
    	</Provider>,
    	document.getElementById("container"));    
}
render();