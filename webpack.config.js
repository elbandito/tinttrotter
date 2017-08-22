var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'app.bundle.js'
    },
    //resolve: {
        //modulesDirectories: [
        //    'node_modules',
        //    'src'
        //],
    //    extensions: [
    //        '',
    //        '.js'
    //    ]
    //},

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
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
