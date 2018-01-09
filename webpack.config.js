const path = require('path');
const webpack = require('webpack');

const config = {
    entry:'./client/src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client/dist/')
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    target: 'node'

};

module.exports = config;