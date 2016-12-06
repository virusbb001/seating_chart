const path = require("path");
module.exports = {
 entry: "./src/index.js",
 output: {
  path: "./build",
  filename: "build.js"
 },
 module: {
  loaders: [
   {
    test: /\.vue$/,
    loader: 'vue'
   },
   {
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/
   }
  ]
 },
 resolve: {
  extensions: ['', '.js', '.vue'],
  fallback: [path.join(__dirname, "node_modules") ],
  alias: {
   "vue": "vue/dist/vue.common.js"
  }
 }
}
