const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile ES6+ code to ES5
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: {
            reserved: [
                // default.js
                'privileges_$PLUGIN_ID',
                'triggerEvent_$PLUGIN_ID',
                'decodeAttributeByName_$PLUGIN_ID',
                'OuterbaseEvent_$PLUGIN_ID',
                'OuterbaseColumnEvent_$PLUGIN_ID',
                'OuterbasePluginConfig_$PLUGIN_ID',

                // cell.js
                'templateCell_$PLUGIN_ID',
                'OuterbasePluginCell_$PLUGIN_ID',

                // editor.js
                'templateEditor_$PLUGIN_ID',
                'OuterbasePluginEditor_$PLUGIN_ID',

                // configuration.js
                'templateConfiguration_$PLUGIN_ID',
                'OuterbasePluginConfiguration_$PLUGIN_ID'
            ],
          },
        },
      }),
    ],
  },
};
