const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	resolve: {
        alias: {
            components: path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx'],
    },
	module: {
		rules: [
					{
						test: /\.js$/,
						use: [ 'babel-loader'],
						exclude: /node_modules/,
					}
				]
	},
	plugins: [
		new HtmlWebpackPlugin({
		template: path.resolve( __dirname, 'public/index.html' ),
		filename: 'index.html'
	})
	],
	devServer: {
		port: 4000
	  },
}
