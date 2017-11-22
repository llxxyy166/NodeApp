/**
 * Created by xinyelei on 11/12/17.
 */
const path = require('path');

module.exports = {
    entry: {
        main: './public/javascripts/main.js',
        login: './public/javascripts/login.js'
    },
    output: {
        path: path.resolve(__dirname, "public/build"),
        filename: "[name].bundle.js"
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "public")
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};