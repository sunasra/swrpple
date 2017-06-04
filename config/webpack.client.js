var webpack = require('webpack');
var path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {
    entry: {
        vendor: ["react", "redux", "react-redux"],
        app:path.resolve(__dirname,'../src/App.js'),
    },
   
    output: {
        path:path.resolve(__dirname,'../dist/'),
        filename: "[name].js"
    },
    module:{
         rules: [
             { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
         ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:"vendor", minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../views/index.hbs'),
            filename: 'index.hbs',
            inject: 'body'
        })
    ]
}


module.exports = config;