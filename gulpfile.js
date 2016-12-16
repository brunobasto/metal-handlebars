'use strict';

var gulp = require('gulp');
var metal = require('gulp-metal');
var runSequence = require('run-sequence');

metal.registerTasks({
	bundleFileName: 'handlebars.js',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'metal-handlebars'
});

gulp.task('default', function(done) {
	runSequence('clean', ['build:globals', 'build:amd'], 'uglify', done);
});