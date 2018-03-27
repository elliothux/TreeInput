
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');
const path = require('path');

const libraryName= pkg.name;


module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'index.js',
        library: libraryName,
        libraryTarget: 'umd',
        publicPath: '/',
        umdNamedDefine: true
    },
    // mode: "production",
    plugins: [
        new ExtractTextPlugin('index.css')
    ],
    module: {
        rules : [
            {
                test: /\.s[a|c]ss$/,
                use : [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg)$/,
                use: ["file-loader"],
            }]
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react') ,
            'react-dom': path.resolve(__dirname, './node_modules/react-dom')
        }
    },
    externals: {
        react: 'react',
        "react-dom": 'react-dom'
    }
};
