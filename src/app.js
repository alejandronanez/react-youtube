import React, { Component } from 'react';
import { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
require('bootstrap/dist/css/bootstrap.min.css');

import SearchBar from './components/search-bar';
const API_KEY = require('./youtube-api.json').API_KEY;

class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}


render(<App />, document.getElementById('root'));
