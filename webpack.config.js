const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: [
        'babel-polyfill',
        path.join(__dirname, './client.js')
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/public')
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextWebpackPlugin.extract( 'style?sourceMap', 'css' )
            },
            {
                test: /\.scss$/,
                loader: ExtractTextWebpackPlugin.extract( 'style?sourceMap', 'css!sass' )
            },
            {
                test: /\.sass$/,
                loader: ExtractTextWebpackPlugin.extract( 'style', 'css?sourceMap!sass?sourceMap' )
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin('styles.css')
    ]
};