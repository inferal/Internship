module.exports = {
    entry: {
        "ClassWork/task2/build/bundle": "./ClassWork/task2/jsx/main.jsx"
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