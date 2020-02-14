const path=require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
    entry: {main:'./src/index.js'},
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename:'main.js',
        publicPath: "dist/"
    },
    devServer: {
      overlay:true
    },
    module: {

        rules: [
            {
                test:/\.js/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.scss/,
                exclude: /node_modules/,
                use:[
                    'style-loader',
                     MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {config:{ path:'postcss.config.js'}}
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name:'[name].[ext]',
                    outputPath: './css/font',
                    publicPath:'./font'
                }
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader',
                options: {
                    name:'[name].[ext]',
                    outputPath: './css/img',
                    publicPath:'./img'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/style.css'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/my-music.html',
            filename: 'my-music.html'
        })
    ]
};