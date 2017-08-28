let webpack = require('webpack');
let path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack/hot/only-dev-server',
        './src'
    ],
    devServer: {
        port: (process.env.PORT || 8080)
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'app.bundle.js'
    },
    resolve: {
        modules: [
            path.resolve('src'),
            'node_modules',
        ],
        extensions: ['.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot-loader',
                    'babel-loader?presets[]=react,presets[]=es2015'
                ]
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
