module.exports = {
    entry: {
        "ClassWork/task1/build/bundle": "./ClassWork/task1/jsx/main.jsx"
    },

    output:{
        filename: '[name].js'
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
