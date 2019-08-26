const merge = require('webpack-merge');
const webpackConf = require('./webpack.dev.conf');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(webpackConf, {
    devtool : false,

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    warnings: false,
                    parse: {},
                    compress: {
                        drop_console: false
                    },
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_fnames: false,
                }
            })
        ],
    },
});