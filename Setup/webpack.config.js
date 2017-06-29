const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: "css-loader"
                },
                {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query:
            {
              presets:['react']
            }
        }]
    },
}