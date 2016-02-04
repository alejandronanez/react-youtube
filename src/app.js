import React from 'react';
import { render } from 'react-dom';
require('bootstrap/dist/css/bootstrap.min.css');

const API_KEY = require('./youtube-api.json').API_KEY;

render(<h1>Hi - React Starter</h1>, document.getElementById('root'));
