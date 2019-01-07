const path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
   entry: './app/index.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js',
      publicPath: '/'
   },
   devServer: {
      inline: true,
      port: 3000,
      historyApiFallback: true,
      contentBase: './',
      hot: true
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
               presets: ['@babel/preset-react']
            }
         },
         {
           test: /\.css$/,
           use: [{ loader: 'style!css!postcss' }]
         },
         {
            test: /\.less$/,
            use: [{loader: 'style!css!postcss!less'}] // creates style nodes from JS strings
        },
        {
          test: /\.(png|gif|jpg|jpeg|bmp)$/i,
          use: [{loader: 'url-loader?limit=8192'}]
      },
      {
        test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
        use: [{ loader:'url-loader?limit=8192'}]
        }
      ]
   },

   plugins:[
      new HtmlWebpackPlugin({
         template: './app/index.html'
      }),
      new webpack.HotModuleReplacementPlugin({
          // Options...
      }),
      // new OpenBrowserPlugin({ url: 'http://localhost:8080' })

   ]
}
