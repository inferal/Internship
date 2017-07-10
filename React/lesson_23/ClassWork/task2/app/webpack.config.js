var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output:{
        filename: 'bundle.js',
        path: './build'
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
