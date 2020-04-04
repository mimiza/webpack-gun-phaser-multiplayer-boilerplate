const path = require("path")

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/app.js"),
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.resolve(__dirname, "src")
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    }
}
