const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode:  (process.env.NODE_ENV === 'development' ? 'development' : 'production'),
    entry: process.env.NODE_ENV === 'development' ? [
    './src/index.dev.js' ] : [
    './src/index.prod.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'build/styles.css'
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            minify: false
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: path.resolve(__dirname, 'dist/assets')
                }
            ]
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    devServer: {
        port: 8088,
        historyApiFallback: true
    },
    devtool: 'source-map'
}

