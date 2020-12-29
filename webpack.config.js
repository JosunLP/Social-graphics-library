const path = require('path');
module.exports = {
    mode: 'production',
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
        umdNamedDefine: true,
        library: 'SocialGraphicsLibrary',
        libraryExport: 'default'
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