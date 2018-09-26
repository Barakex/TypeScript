const path = require('path');

module.exports = (env, options) => ({
    entry: './app.ts',
    output: {
        filename: 'bandle.js',
        path: path.join(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        host: 'localhost',
        port: '3000',
        open: true,
        overlay: true,
        historyApiFallback: true,
    },
})
