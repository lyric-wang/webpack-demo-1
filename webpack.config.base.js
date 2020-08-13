const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.[contenthash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "XDML - 写代码啦",
            template: "src/assets/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]//file loader把文件变成文件路径
            },
            {
                test: /\.styl$/,
                loader: ["style-loader", "css-loader", "stylus-loader"]
            },
            {
                test: /\.less$/,
                loader: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",//style loader把JS字符串转化成标签
                    "css-loader",//css loader把css代码转换成JS字符串
                    {
                        loader: "sass-loader",//sass loader把sass代码转换成css代码
                        options: {
                            implementation: require("dart-sass")
                        }
                    }
                ]
            }
        ]
    }
};