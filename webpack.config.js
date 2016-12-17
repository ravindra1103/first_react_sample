 var path = require('path');

 module.exports = {
   entry: './app.js',
   output: {
     path: path.resolve(__dirname, '.'),
     filename: 'app.min.js'
   },
   module: {
     loaders: [
       {
         test: /\.js$/,
         loader: 'babel-loader',
         query: {
           presets: ['es2015', 'react'],
           "plugins": ["transform-es2015-destructuring", "transform-object-rest-spread"]
         }
       }
     ]
   },
   stats: {
     colors: true
   },
   devtool: 'source-map'
 };
