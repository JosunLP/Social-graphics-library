const path = require('path');
module.exports = {
    mode: 'development',
    target: 'web',
    entry: './src/glc.ts',
    watch: false,
    stats: {
        warnings: false
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: "sgl.bundle.js",
        libraryTarget: 'umd',
        umdNamedDefine: false,
        library: 'SocialGraphicsLibrary',
        libraryExport: 'default',
        globalObject: 'this'
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.worker\.js$/,
                use: { loader: "worker-loader" },
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, './'),
        compress: true,
        port: 9000,
        stats: {
            warnings: false
        },
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.ts', '.tsx']
    },
    devtool: 'inline-source-map',
};