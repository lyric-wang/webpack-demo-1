var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'wode',
        template: 'src/assets/index.html'//用我给你的模板来生成html
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],//如果文件名以.css结尾，就用css-loader把css放js里，用style-loader把css放head里
            },
        ],
    },
};