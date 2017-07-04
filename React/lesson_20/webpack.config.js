module.exports = {
    entry: {
        "ClassWork/task1/build/bundle": "./ClassWork/task1/jsx/main.jsx",
        "ClassWork/task2/build/bundle": "./ClassWork/task2/jsx/main.jsx",
        "ClassWork/task3/build/bundle": "./ClassWork/task3/jsx/main.jsx",
        "HomeWork/task1/build/bundle": "./HomeWork/task1/jsx/main.jsx",
        "HomeWork/task2/build/bundle": "./HomeWork/task2/jsx/main.jsx",
        "HomeWork/task3/build/bundle": "./HomeWork/task3/jsx/main.jsx"


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
