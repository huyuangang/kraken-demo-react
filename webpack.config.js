
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/template/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    resolve: {
        alias: {
            '@views': path.resolve(__dirname, './src/views'),
            '@components': path.resolve(__dirname, './src/components'),
            '@styles': path.resolve(__dirname, './src/styles'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template/index.html'
        })
    ],
    devServer: {
        port: 3000,
        openPage: 'http://127.0.0.1:3000'
    }
}