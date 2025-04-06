const webpackConfig = require('@nextcloud/webpack-vue-config')
const webpackRules = require('@nextcloud/webpack-vue-config/rules')
const TerserPlugin = require('terser-webpack-plugin');

// Custom rule for SVGs
webpackRules.RULE_SVGS = {
	test: /\.svg$/,
	type: 'asset/source'
}

// Remove SVG from the assets rule
webpackRules.RULE_ASSETS.test = /\.(png|jpe?g|gif|woff2?|eot|ttf)$/

webpackConfig.module.rules = Object.values(webpackRules)

// Add the optimization property
webpackConfig.optimization = {
  minimize: true,
  minimizer: [new TerserPlugin()],
};

// Logging configuration for debugging
console.log('Webpack Configuration:', webpackConfig)

module.exports = webpackConfig
