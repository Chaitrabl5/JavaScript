const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
mode: "development",
entry: {
main: path.resolve(__dirname, "main.js"),
},
plugins:[new HtmlWebpackPlugin()],
output: {
path: path.resolve(__dirname, "dist"),
filename: "main.js",
clean: true,
},

plugins:[
    new HtmlWebpackPlugin({
    filename: "index.html",
    title:"Webpack Generated File see the console",
    inject:"body"})]
};