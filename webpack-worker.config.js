//Vamos a usar el paquete path para que las rutas sean válidas tanto en windows como en linux
let path = require("path");
let entryPath = path.join(__dirname, "src");
let outPath = path.join(__dirname, "dist");
let webpack = require('webpack');

//Vamos a usar este plugin para combinar todos los ficheros scss
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: [path.join(entryPath, "worker.js")],
    output: {
        path: outPath,
        filename: "worker.js"
    },
    module: {
        rules : [
            {
                test: /worker.js$/,
                include: entryPath,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ]
            }
        ]
    },
    plugins: [
        
    ]  
}