const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    extractTextPlugin = require("extract-text-webpack-plugin"),
    copyPlugin = require("copy-webpack-plugin"),
    cleanPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        app: ['./src/App.tsx', 'webpack-hot-middleware/client'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    mode: "development",
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            // Extract css in a file
          {
            test: /(\.scss|\.css)$/,
            use: extractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader?url=false'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            })
        },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
        new webpack.HotModuleReplacementPlugin(),
        new extractTextPlugin("styles.css"),
        new cleanPlugin(['dist']),
        new copyPlugin([{ from: 'public' }])
    ]
}