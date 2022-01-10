const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    // .js, .vue 확장자를 따로 명시하지 않아도 문제 없이 동작할 수 있도록 설정
    resolve: {
        extensions: ['.js', '.vue'],
        // alias(경로별칭)
        alias: {
            '~': path.resolve(__dirname, 'src'),
            assets: path.resolve(__dirname, 'src/assets'),
        },
    },
    entry: './src/main.js',
    output: {
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.s?css$/,
                use: ['vue-style-loader', 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new HtmlPlugin({
            template: './index.html',
        }),
        new CopyPlugin({
            patterns: [{ from: 'static' }],
        }),
        new VueLoaderPlugin(),
    ],
    devServer: {
        host: 'localhost',
    },
};
