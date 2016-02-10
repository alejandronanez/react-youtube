import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }
    onInputChange(event) {
        const term = event.target.value;

        this.setState({ term });
        this.props.onInputChange(term);
    }
    render() {
        return (
            <div className="search-bar">
                <input onChange={this.onInputChange.bind(this)} />
            </div>
        );
    }
}

export default SearchBar;
