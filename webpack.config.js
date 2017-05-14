var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extensions = ['.js', '.vue'];

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
        library: 'VueImgPlaceholder',
        libraryTarget: 'umd'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract(['css-loader','less-loader'])
            }
        ]
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src')
        },
        extensions: extensions
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ]
};
