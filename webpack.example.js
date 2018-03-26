
const path = require('path');


module.exports = {
    entry: {
        example: path.join(__dirname, './example/index.js')
    },
    output: {
        path: path.join(__dirname, './example/'),
        filename: '[name].build.js',
        publicPath: '/assets/'
    },
    mode: 'development',
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
