var getConfig = require('hjs-webpack');

var config = getConfig({
    in : 'src/app.js',
    out: 'public',
    clearBeforeBuild: true
});

module.exports = config;
