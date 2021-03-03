const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // devtool: "source-map",
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html'
    })],
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