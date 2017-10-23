'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/root.js'
    ],
    output: {
        path: path.resolve(__dirname, './app/public/build/'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'react-hot-loader/webpack'
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['react'],
                            plugins: ['transform-object-rest-spread', 'transform-class-properties', 'syntax-dynamic-import']
                        }
                    }
                ]
            },
            {
                test: /\.s?css$/,
                include: path.resolve(__dirname, 'src')
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        modules: [
            path.resolve(__dirname, './node_modules'),
            path.resolve(__dirname, './src/components'),
        ]
    },
    devServer: {
        hotOnly: true,
        publicPath: '/build/',
        port: '9090'
    }
};