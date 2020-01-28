const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname,'./client/index.jsx'),
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js[x]?/,
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    }
}