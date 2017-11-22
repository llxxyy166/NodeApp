/**
 * Created by xinyelei on 11/12/17.
 */
const path = require('path');

module.exports = {
    entry: './public/javascripts/login.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "public")
        ]
    }
};