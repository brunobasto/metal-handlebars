'use strict';

var metalKarmaConfig = require('metal-karma-config');

module.exports = function (config) {
	metalKarmaConfig(config);
	config.files.push('node_modules/metal*/src/**/*.js');
	config.preprocessors['node_modules/metal*/**/*.js'] = ['babel', 'commonjs'];

	config.files.push('node_modules/mustache/**/*.js');
};