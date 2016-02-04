import React from 'react';
import { render } from 'react-dom';
require('bootstrap/dist/css/bootstrap.min.css');

import SearchBar from './components/search-bar';
const API_KEY = require('./youtube-api.json').API_KEY;

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};


render(<App />, document.getElementById('root'));
