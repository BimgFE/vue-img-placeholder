var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
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
            'src': path.resolve(__dirname, 'src')
        },
        extensions: extensions
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true
            },
            sourceMap: true
        }),
        new OptimizeCSSPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        new ExtractTextPlugin({
            filename: 'index.css',
        }),
    ]
};