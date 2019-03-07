// webpack.config.js
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');

module.exports = {
    mode:'development',
    // 入口文件配置
	  // entry:'./src/index.js',

    entry: {
         app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer:{
      contentBase:'./dist',
      hot: true
    },
  
	// 出口文件配置
    output:{
      filename: '[name].bundle.js',
		  // filename: 'bundle.js', 
		  path: path.resolve('dist')
	},
    // 插件
	plugins:[
      new CleanWebpackPlugin(['dist']),
	    new HtmlWebpackPlugin({
            // 用哪个html作为模板
            // 在src目录下创建一个index.html页面当做模板来用
            template: './src/index.html',
            // filename：'index.html',
            hash: true, // 会在打包好的bundle.js后面加上hash串
            // chunks: ['index']
        })
	],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
        }
      ]
    }
}