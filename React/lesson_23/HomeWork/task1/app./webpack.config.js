var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output:{
        path: 'public/build/',
        filename: "bundle.js"
    },
    module:{
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                    {
                        presets: ['es2015', 'react']
                    }
            }
        ]
    },
    watch: true
};
