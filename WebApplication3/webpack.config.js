/// <binding ProjectOpened='Watch - Development' />

const path = require('path');
const webpack = require('webpack');
const bundleOutputDir = './wwwroot/dist';

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    return [{
        stats: { modules: false },
        entry: {
            index: "./ClientApp/index.js"
        },
        resolve: { extensions: ['.js'] },
        resolveLoader: {
            modules: ['node_modules', path.resolve(__dirname, 'loaders')]
        },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',
            publicPath: 'dist/'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: /ClientApp/,
                    use: [{
                        loader: "babel-loader",
                        options: {
                            presets: ["env", "stage-0", "react"]
                        }
                    },
                    {
                        loader: "barloader"
                    }]
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
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            })
        ].concat(isDevBuild ? [
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map',
                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]')
            })
        ] : [
            new webpack.optimize.UglifyJsPlugin()
        ])
    }];
};