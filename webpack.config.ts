import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

function resolvePath(...paths: string[]) {
    return path.resolve(__dirname, ...paths);
}

const config: Configuration = {
    entry: resolvePath('src'),

    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: [
                    'awesome-typescript-loader',
                    'tslint-loader',
                ],
            },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },

            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Nonogram',
        }),
    ],
};

export default config;
