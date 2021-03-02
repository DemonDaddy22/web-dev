const path = require('path');

module.exports = {
    mode: "development",
    // devtool: "source-map",
    entry: "./src/index.js",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader",   // 3. injects CSS into DOM
                    "css-loader",       // 2. turns CSS into commonjs
                    "sass-loader"       // 1. turns SASS into CSS
                ]
            }
        ]
    }
};