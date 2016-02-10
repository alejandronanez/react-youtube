import _ from 'lodash';
import React, { Component } from 'react';
import { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
require('bootstrap/dist/css/bootstrap.min.css');
require('./styles/style.css');

import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideList from './components/video-list';
const API_KEY = require('./youtube-api.json').API_KEY;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
    }
    componentDidMount() {
        this.videoSearch('javascript');
    }
    onVideoSelect(selectedVideo) {
        this.setState({ selectedVideo });
    }
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                selectedVideo: videos[0],
                videos: videos
            });
        });
    }
    render() {
        const videoSearchThrottled = _.debounce((term) => { this.videoSearch(term); }, 300);
        return (
            <div>
                <SearchBar onInputChange={videoSearchThrottled} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideList videos={this.state.videos} onVideoSelect={this.onVideoSelect.bind(this)} />
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
