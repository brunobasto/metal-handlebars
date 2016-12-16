'use strict';

var gulp = require('gulp');
var metal = require('gulp-metal');
var runSequence = require('run-sequence');

metal.registerTasks({
	bundleFileName: 'mustache.js',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'metal-mustache'
});

gulp.task('default', function(done) {
	runSequence('clean', ['build:globals', 'build:amd'], 'uglify', done);
});