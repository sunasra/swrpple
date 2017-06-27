var webpack = require('webpack');
var path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')


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
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
  test: /\.css$/,
  loader: 'style-loader'
}, {
  test: /\.css$/,
  loader: 'css-loader',
  query: {
    modules: true,
    localIdentName: '[name]__[local]___[hash:base64:5]'
  }
 
        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: [
        //     { loader: 'css-loader', options: { importLoaders: 1 } },
        //     'postcss-loader'
        //   ]
        // })
      }
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
        }),
         new ExtractTextPlugin('[name].css')
    ]
}


module.exports = config;