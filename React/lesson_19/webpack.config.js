module.exports = {
    entry: {
        "ClassWork/task2/build/bundle": "./ClassWork/task2/jsx/main.js",
        "ClassWork/task3/build/bundle": "./ClassWork/task3/jsx/main.js",
        "HomeWork/task1/build/bundle": "./HomeWork/task1/jsx/main.js",
        "HomeWork/task2/build/bundle": "./HomeWork/task2/jsx/main.js",
        "HomeWork/task3/build/bundle": "./HomeWork/task3/jsx/main.js"
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
