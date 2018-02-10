/// <binding ProjectOpened='Watch - Development' />
const path = require("path");
const webpack = require('webpack');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const bundleOutputDir = './wwwroot/dist';

module.exports = {
    entry: {
        index: "./ClientApp/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, bundleOutputDir)
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "stage-0", "react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [

        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map', // Remove this line if you prefer inline source maps
            moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
        })

        //new UglifyJsPlugin()
    ]
}