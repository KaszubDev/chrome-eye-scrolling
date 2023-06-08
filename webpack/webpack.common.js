const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const srcDir = path.join(__dirname, "..", "src");

module.exports = {
    entry: {
      popup: path.join(srcDir, 'popup.tsx'),
      settings: path.join(srcDir, 'settings.tsx')
    },
    output: {
        path: path.join(__dirname, "../build/js"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.mjs$/,
                type: 'javascript/esm',
                exclude: /node_modules/ 
            },
            {
                test: /\.css$/,
                use: 'css-loader',
                exclude: /node_modules/ 
            }
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".mjs", ".css"],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: ".", to: "../", context: "public" }],
            options: {},
        }),
    ]
};