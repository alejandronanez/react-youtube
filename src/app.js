import React, { Component } from 'react';
import { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
require('bootstrap/dist/css/bootstrap.min.css');

import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideList from './components/video-list';
const API_KEY = require('./youtube-api.json').API_KEY;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        YTSearch({key: API_KEY, term: 'skateboarding'}, (videos) => {
            this.setState({videos});
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <VideList videos={this.state.videos} />
            </div>
        );
    }
}


render(<App />, document.getElementById('root'));
