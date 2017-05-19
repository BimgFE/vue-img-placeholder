var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')
var extensions = ['.js', '.jsx', '.less', '.vue'];

module.exports = {
    entry: './demo/app.js',

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },

    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        less: ExtractTextPlugin.extract({
                            loader: ['css-loader', 'less-loader'],
                            fallbackLoader: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
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
        }),
        new ExtractTextPlugin({
            filename: 'index.css',
        }),
        new HtmlWebpackPlugin({
            title: 'Vue demo',
            template: 'index.html',
            inject: true
        })
    ]
};