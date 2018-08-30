// This library allows us to combine paths easily
const path = require('path');
const webpack = require("webpack");
module.exports = {
    mode: "development", // production
    context: path.resolve(__dirname, 'static/js'),
    entry: {
        index: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'static/js/bundle'),
        filename: '[name].bundle.js',
        publicPath: "/static/js/bundle/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "windows.jQuery": "jquery",
        })
    ],
    resolve: {
        extensions: ['.js'],
    },
    performance: {
        hints: false
    },
    devServer: {
        hot: false
    },
    watchOptions: {
        poll: true
    }
};