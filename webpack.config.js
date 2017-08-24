const { AotPlugin } = require('@ngtools/webpack');

module.exports = {
  entry: './src/main.server.ts',
  devtool: 'source-map',
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'server.js',
    path: process.cwd() + '/dist/server',
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.styl$/, loader: 'raw-loader!stylus-loader' },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },
  plugins: [
    new AotPlugin({
      tsConfigPath: './src/tsconfig.server.json',
      skipCodeGeneration: false,
    }),
  ]
};