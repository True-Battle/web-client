const webpack = require('webpack');

module.exports = {
  output: {
    publicPath: "/"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.jade$/,
        loader: 'jade-loader',
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!stylus-loader',
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          }
        ],
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?limit=20000&mimetype=image/jpg'
        // /include: path.join(__dirname, 'app/assets/img')
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=20000&mimetype=image/png'
        // /include: path.join(__dirname, 'app/assets/img')
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=20000&mimetype=image/svg'
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        loader: 'url-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: [/node_modules/, /public/]
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.EnvironmentPlugin('NODE_ENV')
  ]
};