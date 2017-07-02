module.exports = {
    entry: {
        "ClassWork/task1/build/bundle": "./ClassWork/task1/jsx/main.jsx",
        "ClassWork/task2/build/bundle": "./ClassWork/task2/jsx/main.jsx",
        "ClassWork/task3/build/bundle": "./ClassWork/task3/jsx/main.jsx"

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
