require('babel-register')({
    presets: ['es2015', 'react', 'stage-0']
});

require("babel-polyfill");

require.extensions[ '.sass' ] = function() { return; };
require.extensions[ '.scss' ] = function() { return; };
require.extensions[ '.css' ] = function() { return; };

exports = module.exports = require('./app');