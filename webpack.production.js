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
        libraryTarget: 'umd',
        publicPath: '/',
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
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 20000, // limit image size, if > 20kb, it will output file, or it will base64
                    name: 'img/[name].[hash:7].[ext]'
                }
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
        }),
        new ExtractTextPlugin({
            filename: 'index.css',
        }),
    ]
};