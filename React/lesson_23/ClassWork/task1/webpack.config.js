var webpack = require('webpack');

module.exports = {
    entry: './app/src/main.js',
    output:{
        path: __dirname + '/build/',
        publicPath: "build/",
        filename: 'bundle.js'
    },
    module:{
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                    {
                        presets: ['react']
                    }
            }
        ]
    }
};
