module.exports = {
  //entry: './main.js',
  entry: './app.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  module : {
    rules : [
      {
        test: /\.css/, 
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}],
                'react'
              ]
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  },
  devtool: 'source-map'
};
