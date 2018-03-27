
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        example: path.join(__dirname, './src')
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'index.js'
    },
    // mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: './index.html'
        }),
        new ExtractTextPlugin('index.css')
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: false,
        port: 2334,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: 'style-loader!css-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: "file-loader"
            },
            {
                test: /\.(ttf|eot|svg|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                test: /\.s[a|c]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    target: 'web'
};
