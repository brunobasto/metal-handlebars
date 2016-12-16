'use strict';

var metalKarmaConfig = require('metal-karma-config');

module.exports = function (config) {
	metalKarmaConfig(config);
	config.files.push('node_modules/metal*/src/**/*.js');
	config.preprocessors['node_modules/metal*/**/*.js'] = ['babel', 'commonjs'];

	config.files.push('node_modules/html2incdom-bruno/src/**/*.js');
	config.preprocessors['node_modules/html2incdom-bruno/src/**/*.js'] = ['babel', 'commonjs'];

	config.files.push('node_modules/handlebars/dist/handlebars.js');
};